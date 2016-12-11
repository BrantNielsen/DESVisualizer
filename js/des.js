let DES = {};

DES.generateRandomKey = function () {
	let result = BitArray.generateRandom(64);

	DES.setParityBits(result);

	return result;
};

DES.generateRandomMessage = function() {
	return BitArray.generateRandom(64);
};

DES.setParityBits = function(bitArray) {
	for (let bitIndex = 0; bitIndex < bitArray.length; bitIndex += 8) {
		let num1Bits = 0;

		for (let subBitIndex = bitIndex; subBitIndex < bitIndex + 7; subBitIndex++) {
			num1Bits += bitArray.get(subBitIndex);
		}

		let parityBit = (num1Bits % 2 === 0)? 1 : 0;

		bitArray.set(bitIndex + 7, parityBit);
	}
};

/**
 * Sizes an input to 64 bits exactly. Will add padding with zeros to the end if necessary.
 */
DES._sizeInput = function(input) {
    let result = new BitArray(64);
    let loopTimes = Math.min(result.length, input.length);

    for (let i = 0; i < loopTimes; i++) {
    	result.set(i, input.get(i));
	}

	return result;
};

/**
 * Encrypts the given input with the given key. Will return a result containing data from each step of the encryption.
 */
DES.encrypt = function(key, input) {
	return DES._encryptOrDecrypt(key, input, DES.MODE.ENCRYPTION);
};

DES.decrypt = function(key, input) {
	return DES._encryptOrDecrypt(key, input, DES.MODE.DECRYPTION);
};

DES._encryptOrDecrypt = function(key, input, mode) {
    let result = {};

    result.key = DES._sizeInput(key);
    result.input = DES._sizeInput(input);

    result.initialPermutation = DES.permute(result.input, DES.PERMUTATION_MAPPINGS.INITIAL_PERMUTATION);

    result.roundKeys = DES._generateKeys(result.key);

    if (mode === DES.MODE.DECRYPTION) {
        result.roundKeys.roundKeyParts = result.roundKeys.roundKeyParts.reverse();
    }

    result.rounds = DES._doRounds(result.roundKeys.roundKeyParts, result.initialPermutation, DES.MODE.ENCRYPTION);

    result.finalRoundSwitch = result.rounds[DES.NUM_ROUNDS - 1].rightFinal.concat(result.rounds[DES.NUM_ROUNDS - 1].leftFinal);

    result.final = DES.permute(result.finalRoundSwitch, DES.PERMUTATION_MAPPINGS.FINAL_PERMUTATION);

    return result;
};

/**
 * Performs a data permutation. Permutes data according to a permutation mapping, which maps input bit indexes to output bit indexes.
 */
DES.permute = function(data, permutationMapping, doLog) {
    let result = new BitArray(permutationMapping.length);

    for (let i = 0; i < permutationMapping.length; i++) {
    	result.set(i, data.get(permutationMapping[i] - 1));
	}

	return result;
};

/**
 * Generates per-round keys from an input key. Done in order for encryption; use in reverse for decryption.
 */
DES._generateKeys = function(inputKey) {
	let result = {};

	result.roundKeyParts = [];

	result.initialKeyPermutations = {'c': DES.permute(inputKey, DES.PERMUTATION_MAPPINGS.PC1_C), 'd': DES.permute(inputKey, DES.PERMUTATION_MAPPINGS.PC1_D)};

	let lastC = result.initialKeyPermutations.c;
	let lastD = result.initialKeyPermutations.d;

	for (let roundIndex = 0; roundIndex < DES.NUM_ROUNDS; roundIndex++) {
		let keyParts = {};

		keyParts.preShiftC = lastC.copy();
		keyParts.preShiftD = lastD.copy();

		keyParts.shiftedC = keyParts.preShiftC.copy();
		keyParts.shiftedC.shiftLeft(DES.PER_ROUND_KEY_SHIFTS[roundIndex], true);

		keyParts.shiftedD = keyParts.preShiftD.copy();
		keyParts.shiftedD.shiftLeft(DES.PER_ROUND_KEY_SHIFTS[roundIndex], true);

		keyParts.combinedCD = keyParts.shiftedC.concat(keyParts.shiftedD);

		keyParts.pc2C = DES.permute(keyParts.combinedCD, DES.PERMUTATION_MAPPINGS.PC2_C);
		keyParts.pc2D = DES.permute(keyParts.combinedCD, DES.PERMUTATION_MAPPINGS.PC2_D);

		keyParts.key = keyParts.pc2C.concat(keyParts.pc2D);

		lastC = keyParts.shiftedC;
		lastD = keyParts.shiftedD;

		result.roundKeyParts[roundIndex] = keyParts;
	}

	return result;
};

DES._doRounds = function(roundKeys, permutedInput, mode) {
    let result = [];

    let lastRoundOutput = permutedInput;

    for (let roundIndex = 0; roundIndex < DES.NUM_ROUNDS; roundIndex++) {
        let thisRound = {};

        thisRound.input = lastRoundOutput.copy();

        thisRound.leftInitial = thisRound.input.slice(0, 32);
        thisRound.rightInitial = thisRound.input.slice(32, 64);

        if (mode === DES.MODE.ENCRYPTION) {
            thisRound.manglerData = DES._mangle(roundKeys[roundIndex].key, thisRound.rightInitial);

            thisRound.rightFinal = thisRound.manglerData.finalOutput.copy();
            thisRound.rightFinal.xor(thisRound.leftInitial);

            thisRound.leftFinal = thisRound.rightInitial.copy();
        } else {
        	thisRound.manglerData = DES._mangle(roundKeys[roundIndex].key, thisRound.leftInitial);

        	thisRound.rightFinal = thisRound.leftInitial.copy();

        	thisRound.leftFinal = thisRound.manglerData.finalOutput.copy();
        	thisRound.leftFinal.xor(thisRound.rightInitial);
		}

        thisRound.finalOutput = thisRound.leftFinal.concat(thisRound.rightFinal);

        lastRoundOutput = thisRound.finalOutput;

        result[roundIndex] = thisRound;
    }

    return result;
};

DES._mangle = function(roundKey, input) {
	let manglerData = {};

    manglerData.expandedData = DES.permute(input, DES.PERMUTATION_MAPPINGS.MANGLER_EXPAND_PERMUTATION);

	manglerData.sBoxDataInputs = DES._getSBoxInputs(manglerData.expandedData);
	manglerData.sBoxKeyInputs = DES._getSBoxInputs(roundKey);

	manglerData.sBoxFinalInputs = [];
	for (let i = 0; i < 8; i++) {
		let thisFinalInput = manglerData.sBoxDataInputs[i].copy();
		thisFinalInput.xor(manglerData.sBoxKeyInputs[i]);

		manglerData.sBoxFinalInputs[i] = thisFinalInput;
	}

	DES._processSBoxChunks(manglerData);

	manglerData.combinedOutputs = DES._combineSBoxOutputs(manglerData);
	manglerData.finalOutput = DES.permute(manglerData.combinedOutputs, DES.PERMUTATION_MAPPINGS.SBOX_PERMUTATION);

	return manglerData;
};

DES._getSBoxInputs = function(expandedData) {
	let result = [];

	for (let i = 0; i < 8; i++) {
		let startBitIndex = i * 6;
		let endBitIndex = startBitIndex + 6;

		result[i] = expandedData.slice(startBitIndex, endBitIndex);
	}

	return result;
};

DES._processSBoxChunks = function(manglerData) {
    manglerData.rowColumnData = [];
    manglerData.sBoxOutputs = [];

    for (let sBoxIndex = 0; sBoxIndex < 8; sBoxIndex++) {
    	let rowColumn = DES._getSBoxRowAndColumn(manglerData.sBoxFinalInputs[sBoxIndex]);

        let sBoxDataIndex = rowColumn.row * 16 + rowColumn.column;

        manglerData.sBoxOutputs[sBoxIndex] = BitArray.fromNumber(DES.SBOXES[sBoxIndex][sBoxDataIndex], 4);
        manglerData.rowColumnData[sBoxIndex] = rowColumn;
	}
};

DES._combineSBoxOutputs = function(manglerData) {
	let result = manglerData.sBoxOutputs[0].copy();

	for (let i = 1; i < manglerData.sBoxOutputs.length; i++) {
		result = result.concat(manglerData.sBoxOutputs[i]);
	}

	return result;
};

DES._getSBoxRowAndColumn = function(input) {
	let result = {};

	let rowBit1 = (input.get(0))? 1 : 0;
	let rowBit2 = (input.get(5))? 1 : 0;

	result.row = (rowBit1 << 1) | rowBit2;

    let columnBit1 = (input.get(1))? 1 : 0;
    let columnBit2 = (input.get(2))? 1 : 0;
    let columnBit3 = (input.get(3))? 1 : 0;
    let columnBit4 = (input.get(4))? 1 : 0;

	result.column = (columnBit1 << 3) | (columnBit2 << 2) | (columnBit3 << 1) | columnBit4;

	return result;
};


//Permutation mappings map input bit indices to output bit indices
//Each value in a mapping corresponds to the input bit index (plus 1), and each value's index in the array corresponds with
//the appropriate bit index in the resulting permutation.
//These mappings are structured the same way as in the book and in online sources.
DES.PERMUTATION_MAPPINGS = {};

DES.PERMUTATION_MAPPINGS.PC1_C = [
	57, 49, 41, 33, 25, 17,  9,
	 1, 58, 50, 42, 34, 26, 18,
	10,  2, 59, 51, 43, 35, 27,
	19, 11,  3, 60, 52, 44, 36
];

DES.PERMUTATION_MAPPINGS.PC1_D = [
	63, 55, 47, 39, 31, 23, 15,
	 7, 62, 54, 46, 38, 30, 22,
	14,  6, 61, 53, 45, 37, 29,
	21, 13,  5, 28, 20, 12,  4
];

DES.PERMUTATION_MAPPINGS.PC2_C = [
	14, 17, 11, 24,  1,  5,
	 3, 28, 15,  6, 21, 10,
	23, 19, 12,  4, 26,  8,
	16,  7, 27, 20, 13,  2
];

DES.PERMUTATION_MAPPINGS.PC2_D = [
	41, 52, 31, 37, 47, 55,
	30, 40, 51, 45, 33, 48,
	44, 49, 39, 56, 34, 53,
	46, 42, 50, 36, 29, 32
];

DES.PERMUTATION_MAPPINGS.INITIAL_PERMUTATION = [
	58, 50, 42, 34, 26, 18, 10,  2,
	60, 52, 44, 36, 28, 20, 12,  4,
	62, 54, 46, 38, 30, 22, 14,  6,
	64, 56, 48, 40, 32, 24, 16,  8,
	57, 49, 41, 33, 25, 17,  9,  1,
	59, 51, 43, 35, 27, 19, 11,  3,
	61, 53, 45, 37, 29, 21, 13,  5,
	63, 55, 47, 39, 31, 23, 15,  7
];

DES.PERMUTATION_MAPPINGS.FINAL_PERMUTATION = [
	40,  8, 48, 16, 56, 24, 64, 32,
	39,  7, 47, 15, 55, 23, 63, 31,
	38,  6, 46, 14, 54, 22, 62, 30,
	37,  5, 45, 13, 53, 21, 61, 29,
	36,  4, 44, 12, 52, 20, 60, 28,
	35,  3, 43, 11, 51, 19, 59, 27,
	34,  2, 42, 10, 50, 18, 58, 26,
	33,  1, 41,  9, 49, 17, 57, 25
];

DES.PERMUTATION_MAPPINGS.MANGLER_EXPAND_PERMUTATION = [
    32,  1,  2,  3,  4,  5,
     4,  5,  6,  7,  8,  9,
     8,  9, 10, 11, 12, 13,
    12, 13, 14, 15, 16, 17,
    16, 17, 18, 19, 20, 21,
    20, 21, 22, 23, 24, 25,
    24, 25, 26, 27, 28, 29,
    28, 29, 30, 31, 32,  1
];

DES.PERMUTATION_MAPPINGS.SBOX_PERMUTATION = [16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25];

DES.SBOXES = [];

DES.SBOXES[0] = [
	14,  4, 13,  1,  2, 15, 11,  8,  3, 10,  6, 12,  5,  9,  0,  7,
	 0, 15,  7,  4, 14,  2, 13,  1, 10,  6, 12, 11,  9,  5,  3,  8,
	 4,  1, 14,  8, 13,  6,  2, 11, 15, 12,  9,  7,  3, 10,  5,  0,
	15, 12,  8,  2,  4,  9,  1,  7,  5, 11,  3, 14, 10,  0,  6, 13
];

DES.SBOXES[1] = [
    15,	 1,  8, 14,  6, 11,  3,  4,  9,	 7,	 2, 13,	12,  0,  5, 10,
     3,	13,	 4,  7, 15,  2,  8, 14, 12,  0,  1, 10,  6,  9, 11,  5,
	 0, 14,  7, 11, 10,  4, 13,  1,  5,  8, 12,  6,  9,  3,  2, 15,
   	13,  8, 10,  1,  3, 15,  4,  2, 11,  6,  7, 12,  0,  5, 14,  9
];

DES.SBOXES[2] = [
    10,  0,  9, 14,  6,  3, 15,  5,  1, 13, 12,  7, 11,  4,  2,  8,
    13,  7,  0,  9,  3,  4,  6, 10,  2,  8,  5, 14, 12, 11, 15,  1,
    13,  6,  4,  9,  8, 15,  3,  0, 11,  1,  2, 12,  5, 10, 14,  7,
     1, 10, 13,  0,  6,  9,  8,  7,  4, 15, 14,  3, 11,  5,  2, 12
];

DES.SBOXES[3] = [
     7, 13, 14,  3,  0,  6,  9, 10,  1,  2,  8,  5, 11, 12,  4, 15,
    13,  8, 11,  5,  6, 15,  0,  3,  4,  7,  2, 12,  1, 10, 14,  9,
    10,  6,  9,  0, 12, 11,  7, 13, 15,  1,  3, 14,  5,  2,  8,  4,
     3, 15,  0,  6, 10,  1, 13,  8,  9,  4,  5, 11, 12,  7,  2, 14
];

DES.SBOXES[4] = [
     2, 12,  4,  1,  7, 10, 11,  6,  8,  5,  3, 15, 13,  0, 14,  9,
    14, 11,  2, 12,  4,  7, 13,  1,  5,  0, 15, 10,  3,  9,  8,  6,
     4,  2,  1, 11, 10, 13,  7,  8, 15,  9, 12,  5,  6,  3,  0, 14,
    11,  8, 12,  7,  1, 14,  2, 13,  6, 15,  0,  9, 10,  4,  5,  3
];

DES.SBOXES[5] = [
    12,  1, 10, 15,  9,  2,  6,  8,  0, 13,  3,  4, 14,  7,  5, 11,
    10, 15,  4,  2,  7, 12,  9,  5,  6,  1, 13, 14,  0, 11,  3,  8,
     9, 14, 15,  5,  2,  8, 12,  3,  7,  0,  4, 10,  1, 13, 11,  6,
     4,  3,  2, 12,  9,  5, 15, 10, 11, 14,  1,  7,  6,  0,  8, 13
];

DES.SBOXES[6] = [
     4, 11,  2, 14, 15,  0,  8, 13,  3, 12,  9,  7,  5, 10,  6,  1,
    13,  0, 11,  7,  4,  9,  1, 10, 14,  3,  5, 12,  2, 15,  8,  6,
     1,  4, 11, 13, 12,  3,  7, 14, 10, 15,  6,  8,  0,  5,  9,  2,
     6, 11, 13,  8,  1,  4, 10,  7,  9,  5,  0, 15, 14,  2,  3, 12
];

DES.SBOXES[7] = [
    13,  2,  8,  4,  6, 15, 11,  1, 10,  9,  3, 14,  5,  0, 12,  7,
     1, 15, 13,  8, 10,  3,  7,  4, 12,  5,  6, 11,  0, 14,  9,  2,
     7, 11,  4,  1,  9, 12, 14,  2,  0,  6, 10, 13, 15,  3,  5,  8,
     2,  1, 14,  7,  4, 10,  8, 13, 15, 12,  9,  0,  3,  5,  6, 11
];

DES.PER_ROUND_KEY_SHIFTS = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
DES.NUM_ROUNDS = DES.PER_ROUND_KEY_SHIFTS.length;

DES.MODE = {};
DES.MODE.ENCRYPTION = 1;
DES.MODE.DECRYPTION = 2;
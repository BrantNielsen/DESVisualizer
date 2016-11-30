var DES = function(key, message) {
	this.key = this._sizeInput(key);
	this.message = this._sizeInput(message);
};

/**
 * Sizes an input to 64 bits exactly. Will add padding with zeros to the end if necessary.
 */
DES.prototype._sizeInput = function(input) {
	let result = new Uint8Array(8);
	let loopTimes = Math.min(result.length, input.length);

	for (let i = 0; i < loopTimes; i++) {
		result[i] = input[i];
	}

	return result;
};

/**
 * Encrypts the message with the key. Result will be accessible on this instance with the variable 'final'.
 */
DES.prototype.encrypt = function() {
	this.initialInputPermutation = this.permute(this.message, DES.PERMUTATION_MAPPINGS.INITIAL_PERMUTATION);

	this._generateKeys();
	this._doRounds();

	this.final = this.permute(this.rounds[DES.NUM_ROUNDS - 1].finalOutput, DES.PERMUTATION_MAPPINGS.FINAL_PERMUTATION);
};

/**
 * Performs a data permutation. Permutes data according to a permutation mapping, which maps input bit indexes to output bit indexes.
 */
DES.prototype.permute = function(data, permutationMapping) {
	let result = new Uint8Array(Math.floor(permutationMapping.length / 8));

	//i corresponds to the bit index in the result, and the current array index in the permutation mapping
	for (let i = 0; i < permutationMapping.length; i++) {
		//Get the octet and sub-bit index of this bit index.
		let resultIndices = Utils.getSubIndices(i);

		//The appropriate bit index in the input data
		let dataBitIndex = permutationMapping[i] - 1;
		let dataBit = Utils.getBitFromOctetArray(data, dataBitIndex);

		//Set the appropriate bit in the result
		result[resultIndices.octetIndex] = Utils.insertBitIntoOctetFromLeft(result[resultIndices.octetIndex], dataBit, resultIndices.bitIndex);
	}

	return result;
};

DES.prototype._generateKeys = function() {
	this.roundKeyParts = [];

	this.initialKeyPermutations = {'c': this.permute(this.key, DES.PERMUTATION_MAPPINGS.PC1_C), 'd': this.permute(this.key, DES.PERMUTATION_MAPPINGS.PC1_D)};

	let lastC = this.initialKeyPermutations.c;
	let lastD = this.initialKeyPermutations.d;

	for (let i = 0; i < DES.NUM_ROUNDS; i++) {
		let keyParts = {};

		keyParts.preShiftC = Utils.cloneArray(lastC);
		keyParts.preShiftD = Utils.cloneArray(lastD);

		keyParts.shiftedC = Utils.rotateBitsLeft(lastC, DES.PER_ROUND_KEY_SHIFTS[i]);
		keyParts.shiftedD = Utils.rotateBitsLeft(lastD, DES.PER_ROUND_KEY_SHIFTS[i]);

		keyParts.combinedCD = Utils.concatOctetArrays(keyParts.shiftedC, keyParts.shiftedD);

		keyParts.pc2C = this.permute(keyParts.combinedCD, DES.PERMUTATION_MAPPINGS.PC2_C);
		keyParts.pc2D = this.permute(keyParts.combinedCD, DES.PERMUTATION_MAPPINGS.PC2_D);

		keyParts.key = Utils.concatOctetArrays(keyParts.pc2C, keyParts.pc2D);

		this.roundKeyParts[i] = keyParts;
	}
};

DES.prototype._doRounds = function() {
	this.rounds = [];

	let lastRoundOutput = this.initialInputPermutation;

	for (let roundIndex = 0; roundIndex < DES.NUM_ROUNDS; roundIndex++) {
		let thisRound = {};

		thisRound.input = Utils.cloneArray(lastRoundOutput);

		thisRound.leftInitial = thisRound.input.slice(0, 4);
		thisRound.rightInitial = thisRound.input.slice(4, 8);

		this._mangle(thisRound, roundIndex);

		thisRound.rightFinal = Utils.xorOctetArrays(thisRound.manglerData.finalOutput, thisRound.leftInitial);
		thisRound.leftFinal = Utils.cloneArray(thisRound.rightInitial);

		thisRound.finalOutput = Utils.concatOctetArrays(thisRound.leftFinal, thisRound.rightFinal);

		lastRoundOutput = thisRound.finalOutput;

		this.rounds[roundIndex] = thisRound;
	}
};

DES.prototype._mangle = function(roundObject, roundIndex) {
	roundObject.manglerData = {};

	//Shortcut
	let manglerData = roundObject.manglerData;

	manglerData.expandedData = this.permute(roundObject.rightInitial, DES.PERMUTATION_MAPPINGS.MANGLER_EXPAND_PERMUTATION);

	manglerData.sBoxDataInputs = this._getSboxInputs(manglerData.expandedData);
	manglerData.sBoxKeyInputs = this._getSboxInputs(this.roundKeyParts[roundIndex].key);

	manglerData.sboxFinalInputs = Utils.xorOctetArrays(manglerData.sBoxDataInputs, manglerData.sBoxKeyInputs);

	this._processSBoxChunks(manglerData);

	manglerData.combinedOutputs = this._combineSboxOutputs(manglerData);
	manglerData.finalOutput = this.permute(manglerData.combinedOutputs, DES.PERMUTATION_MAPPINGS.SBOX_PERMUTATION);
};

DES.prototype._getSboxInputs = function(expandedData) {
	let result = new Uint8Array(8);

	for (let i = 0; i < 8; i++) {
		let startBitIndex = i * 6;
		let endBitIndex = startBitIndex + 6;

		result[i] = Utils.sliceFromOctetArray(expandedData, startBitIndex, endBitIndex)[0] >>> 2;
	}

	return result;
};

DES.prototype._processSBoxChunks = function(manglerData) {
	manglerData.rowColumnData = [];
	manglerData.sboxOutputs = new Uint8Array(8);

	for (let sboxIndex = 0; sboxIndex < 8; sboxIndex++) {
		let rowColumn = this._getSBoxRowAndColumn(manglerData.sboxFinalInputs[sboxIndex]);

		let sboxDataIndex = rowColumn.row * 16 + rowColumn.column;

		manglerData.sboxOutputs = DES.SBOXES[sboxIndex][sboxDataIndex];
		manglerData.rowColumnData[sboxIndex] = rowColumn;
	}
};

DES.prototype._combineSboxOutputs = function(manglerData) {
	let result = new Uint8Array(4);

	result[0] = (manglerData.sboxOutputs[0] << 4) | manglerData.sboxOutputs[1];
	result[1] = (manglerData.sboxOutputs[2] << 4) | manglerData.sboxOutputs[3];
	result[2] = (manglerData.sboxOutputs[4] << 4) | manglerData.sboxOutputs[5];
	result[3] = (manglerData.sboxOutputs[6] << 4) | manglerData.sboxOutputs[7];

	return result;
};

DES.prototype._getSBoxRowAndColumn = function(input) {
	let result = {};

	let rowBit1 = Utils.getOctetBitFromLeft(input, 2);
	let rowBit2 = Utils.getOctetBitFromLeft(input, 7);

	result.row = (rowBit1 << 1) | rowBit2;

	let columnBit1 = Utils.getOctetBitFromLeft(input, 3);
	let columnBit2 = Utils.getOctetBitFromLeft(input, 4);
	let columnBit3 = Utils.getOctetBitFromLeft(input, 5);
	let columnBit4 = Utils.getOctetBitFromLeft(input, 6);

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
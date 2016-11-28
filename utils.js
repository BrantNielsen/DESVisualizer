var Utils = {};

Utils._binaryToHexArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
Utils._hexToBinaryObj = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15
};

Utils.toBinaryString = function(value, numBits) {
	let result = "";

	for (let i = numBits - 1; i >= 0; i--) {
		if ((value >>> i) & 1) {
			result += "1";
		} else {
			result += "0";
		}
	}

	return result;
}

Utils.octetToBinaryString = function (value) {
	return Utils.toBinaryString(value, 8);
}

Utils.asciiToOctetArr = function(asciiString) {
	let bytes = [];

	for (let i = 0; i < asciiString.length; i++) {
		let val = asciiString.charCodeAt(i);

		if (val > 255) {
			throw "InvalidAsciiString";
		}

		bytes.push(val);
	}

	return bytes;
}

Utils.octetArrToAscii = function(arr) {
	let result = "";

	for (let i = 0; i < arr.length; i++) {
		result += String.fromCharCode(arr[i]);
	}

	return result;
}

Utils.hexStringToOctetArr = function(hexString) {
	let result = [];
	let addToExisting = false;

	for (let i = hexString.length - 1; i >= 0; i--) {
		let char = hexString.charAt(i);

		if (char === " ") {
			continue;
		}

		let intVal = Utils._hexToBinaryObj[char];

		if (typeof intVal === "undefined") {
            throw "InvalidHexString";
        }

		if (addToExisting) {
            result[0] = (intVal << 4) | result[0];
		} else {
            result.unshift(intVal);
		}

		addToExisting = !addToExisting;
	}

	return result;
}

Utils.octetArrToHexString = function(arr) {
	let result = "";

	for (let i = 0; i < arr.length; i++) {
		if (i > 0) {
			result += " ";
		}

		let val = arr[i];

		result += Utils._binaryToHexArr[(val >>> 4) & 0xf] + Utils._binaryToHexArr[val & 0xf];
	}

	return result;
}

Utils.octetArrToBinaryString = function(arr) {
	let result = "";

	for (let i = 0; i < arr.length; i++) {
		if (i > 0) {
			result += " ";
		}

		result += Utils.octetToBinaryString(arr[i]);
	}

	return result;
}

Utils.getOctetBitFromLeft = function(octet, bitIndex) {
	return (octet >>> (7 - bitIndex)) & 1;
};

Utils.getOctetBitFromRight = function(octet, bitIndex) {
	return (octet >>> bitIndex) & 1;
};

Utils.insertBitIntoOctetFromLeft = function(octet, bit, bitIndex) {
	//Shift the bit to its proper location to be ORed with the octet.
	//Also, AND it with a 1 to ensure it actually is a single bit and not multiple bits.
	let bitInsertion = (bit & 1) << (7 - bitIndex);

	//We want to guarantee that the bit will be properly inserted at the correct position whether it is a 1 or 0.
	//Therefore, we want to reset the proper bit in the octet to 0 before ORing with the bit in the proper position.
	//We'll do that by ANDing with 11101111, where that 0 is in the proper place.
	//XORing with -1 always flips all the bits.
	let bitMask = (1 << (7 - bitIndex)) ^ -1;

	return (octet & bitMask) | bitInsertion;
};

//NOTE: Does not alter the original array. Creates a new array with the shifted bits in it.
Utils.rotateBitsLeft = function(octetArr, shift) {
	let result = new Uint8Array(octetArr.length);
	let numBits = octetArr.length * 8;

	for (let resultBitIndex = 0; resultBitIndex < numBits; resultBitIndex++) {
		let resultOctetIndex = Math.floor(resultBitIndex / 8);
		let resultSubBitIndex = resultBitIndex % 8;

		let dataBitIndex = (resultBitIndex + shift) % numBits;

		let dataOctetIndex = Math.floor(dataBitIndex / 8);
		let dataSubBitIndex = dataBitIndex % 8;

		let dataBit = Utils.getOctetBitFromLeft(octetArr[dataOctetIndex], dataSubBitIndex);

		result[resultOctetIndex] = Utils.insertBitIntoOctetFromLeft(result[resultOctetIndex], dataBit, resultSubBitIndex);
	}

	return result;
};

/**
 * Gets a slice from an octet array, from a particular start bit index up to but not including a particular end bit index.
 */
Utils.sliceFromOctetArray = function (octetArray, startBitIndex, endBitIndex) {
	let result = new Uint8Array(Math.ceil((endBitIndex - startBitIndex) / 8));
	let resultBitIndex = 0;

	for (let dataBitIndex = startBitIndex; dataBitIndex < endBitIndex; dataBitIndex++) {
		let dataOctetIndex = Math.floor(dataBitIndex / 8);
		let dataSubBitIndex = dataBitIndex % 8;

        let dataBit = Utils.getOctetBitFromLeft(octetArray[dataOctetIndex], dataSubBitIndex);

		let resultOctetIndex = Math.floor(resultBitIndex / 8);
		let resultSubBitIndex = resultBitIndex % 8;

		result[resultOctetIndex] = Utils.insertBitIntoOctetFromLeft(result[resultOctetIndex], dataBit, resultSubBitIndex);

		resultBitIndex++;
	}

	return result;
}

Utils.cloneArray = function(arr) {
	return arr.slice(0);
}
/**
 * JavaScript BitArray - v0.2.0
 *
 * Licensed under the revised BSD License.
 * Copyright 2010-2012 Bram Stein
 * All rights reserved.
 *
 * Modified by Brant Nielsen for the DES Visualizer project
 */

/**
 * Creates a new empty BitArray with the given length or initialises the BitArray with the given hex representation.
 */
let BitArray = function (size, hex) {
    this.length = size;
    this.buffer = new ArrayBuffer(Math.ceil(this.length / 32) * 4);
    this.wordArray = new Uint32Array(this.buffer);

    if (hex) {
        hex = hex.slice(/^0x/.exec(hex) ? 2 : 0);

        let bitIndex = this.length - 1;
        for (let hexIndex = hex.length - 1; hexIndex >= 0 && bitIndex >= 0; hexIndex--) {
            let hexDigit = hex.charAt(hexIndex);
            let intVal = BitArray._hexToBinaryObj[hexDigit];

            if (typeof intVal === "undefined") {
                continue;
            }

            for (let shiftAmount = 0; shiftAmount < 4 && bitIndex >= 0; shiftAmount++) {
                this.set(bitIndex, (intVal >>> shiftAmount) & 1);
                bitIndex--;
            }
        }

    }
};

BitArray._binaryToHexArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
BitArray._hexToBinaryObj = {
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

BitArray.fromHex = function(hex) {
    let hexString = "";

    for (let i = 0; i < hex.length; i++) {
        let thisChar = hex.charAt(i).toLowerCase();

        if (BitArray._binaryToHexArr.indexOf(thisChar) > -1) {
            hexString += thisChar;
        }
    }

    return new BitArray(hexString.length * 4, hexString);
};

BitArray.fromBinary = function(binary) {
    let binaryArr = [];

    for (let i = 0; i < binary.length; i++) {
        let thisChar = binary.charAt(i);

        if (thisChar === "1") {
            binaryArr.push(1);
        } else if (thisChar === "0") {
            binaryArr.push(0);
        }
    }

    let result = new BitArray(binaryArr.length);

    for (let i = 0; i < binaryArr.length; i++) {
        result.set(i, binaryArr[i]);
    }

    return result;
};

BitArray.fromNumber = function(value, numBits) {
    numBits = numBits || 32;

    let result = new BitArray(numBits);

    for (let resultBitIndex = 0; resultBitIndex < numBits; resultBitIndex++) {
        let shiftAmount = numBits - resultBitIndex - 1;
        let bit = (value >>> shiftAmount) & 1;

        result.set(resultBitIndex, bit);
    }

    return result;
};

BitArray.fromAscii = function(ascii) {
    let asciiCodes = [];

    for (let i = 0; i < ascii.length; i++) {
        let thisAsciiCode = ascii.charCodeAt(i);

        //Just skip non-Ascii characters
        if (thisAsciiCode < 256) {
            asciiCodes.push(thisAsciiCode);
        }
    }

    let result = new BitArray(asciiCodes.length * 8);
    let bitIndex = 0;

    for (let asciiIndex = 0; asciiIndex < ascii.length; asciiIndex++) {
        let byte = asciiCodes[asciiIndex];

        for (let i = 0; i < 8; i++) {
            let bit = (byte >> (7 - i)) & 1;

            result.set(bitIndex, bit);

            bitIndex++;
        }
    }

    return result;
};

BitArray.generateRandom = function(size) {
    let result = new BitArray(size);

    for (let i = 0; i < size; i++) {
        let randomBit = (Math.random() > 0.5)? true : false;

        result.set(i, randomBit);
    }

    return result;
};

/**
 * Returns the total number of bits in this BitArray.
 */
BitArray.prototype.size = function() {
    return this.length;
};

/**
 * Sets the bit at index to a value (boolean.)
 */
BitArray.prototype.set = function(index, value) {
    if (arguments.length !== 2) {
        throw 'Index and value are required arguments.';
    }
    if (index > this.length - 1) {
        throw 'Index too large.' + index + ' ' + this.length;
    }
    let wordOffset = Math.floor(index / 32);
    // The underlying byte buffer will be initialized to zeros.
    let bitOffset = index - wordOffset * 32;
    if (value) {
        this.wordArray[wordOffset] |= (1 << bitOffset);
    } else {
        this.wordArray[wordOffset] &= ~(1 << bitOffset);
    }
    return this;
};

/**
 * Toggles the bit at index. If the bit is on, it is turned off. Likewise, if the bit is off it is turned on.
 */
BitArray.prototype.toggle = function(index) {
    if (index > this.length - 1) {
        throw 'Index too large.';
    }
    let wordOffset = Math.floor(index / 32);
    let bitOffset = index - wordOffset * 32;
    this.wordArray[wordOffset] ^= 1 << bitOffset;
    return this;
};

/**
 * Returns the value of the bit at index (boolean.)
 */
BitArray.prototype.get = function(index) {
    if (index > this.length - 1) {
        throw 'Index too large.';
    }
    let wordOffset = Math.floor(index / 32);
    let bitOffset = index - wordOffset * 32;
    return !! (this.wordArray[wordOffset] & (1 << bitOffset));
};

/**
 * Resets the BitArray so that it is empty and can be re-used.
 */
BitArray.prototype.reset = function() {
    this.buffer = new ArrayBuffer(Math.ceil(this.length / 32) * 4);
    this.wordArray = new Uint32Array(this.buffer);
    return this;
};

/**
 * Returns a copy of this BitArray.
 */
BitArray.prototype.copy = function() {
    let cp = new BitArray(this.length);
    for (let i = 0; i < this.wordArray.length; i++) {
        cp.wordArray[i] = this.wordArray[i];
    }
    return cp;
};

/**
 * Returns true if this BitArray equals another. Two BitArrays are considered
 * equal if both have the same length and bit pattern.
 */
BitArray.prototype.equals = function(x) {
    if (this.length !== x.length) {
        return false;
    }
    for (let i = 0; i < this.wordArray.length; i++) {
        if (this.wordArray[i] !== x.wordArray[i]) {
            return false;
        }
    }
    return true;
};

/**
 * Returns the JSON representation of this BitArray.
 */
BitArray.prototype.toJSON = function() {
    return "new BitArray(" + this.length + ", '" + this.toHexString() + "')";
};

/**
 * Returns a string representation of the BitArray with bits
 * in mathematical order.
 */
BitArray.prototype.toBinaryString = function(spaceFrequency) {
    spaceFrequency = spaceFrequency || 0;

    let result = "";
    let arr = this.toArray();

    for (let i = 0; i < arr.length; i++) {
        result += (arr[i])? "1" : "0";

        //Insert a space if space frequency was specified, this isn't the last index, and this is the nth character since the last time a space was added
        if (spaceFrequency > 0 && (i + 1) % spaceFrequency === 0) {
            result += " ";
        }
    }

    return result.trim();
};

/**
 * Returns a hexadecimal string representation of the BitArray
 * with bits in logical order.
 */
BitArray.prototype.toHexString = function(spaceFrequency) {
    /*let result = [];

    for (let i = 0; i < this.wordArray.length; i += 1) {
        result.push(('00000000' + (this.wordArray[i] >>> 0).toString(16)).slice(-8));
    }

    return result.join("");*/
    let result = "";

    let hexNum = 0;

    for (let rightIndex = this.length - 1; rightIndex >= 0; rightIndex -= 4) {
        hexNum++;

        let thisNibble = 0;

        for (let bitIndex = rightIndex;  bitIndex > rightIndex - 4 && bitIndex >= 0; bitIndex--) {
            let thisBit = this.get(bitIndex)? 1 : 0;

            let bitMoved = thisBit << (rightIndex - bitIndex);

            thisNibble = thisNibble | bitMoved;
        }

        result = BitArray._binaryToHexArr[thisNibble] + result;

        if (spaceFrequency > 0 && hexNum % spaceFrequency === 0) {
            result = " " + result;
        }
    }

    return result.trim();
};

BitArray.prototype.toAsciiString = function() {
    let result = "";

    for (let rightIndex = this.length - 1; rightIndex >= 0; rightIndex -= 8) {
        let thisByte = 0;

        for (let bitIndex = rightIndex; bitIndex > rightIndex - 8 && bitIndex >= 0; bitIndex--) {
            let thisBit = this.get(bitIndex)? 1 : 0;

            let bitMoved = thisBit << (rightIndex - bitIndex);

            thisByte = thisByte | bitMoved;
        }

        result = String.fromCharCode(thisByte) + result;
    }

    return result;
};

/**
 * Returns a string representation of the BitArray with bits
 * in logical order.
 */
BitArray.prototype.toString = function() {
    return this.toBinaryString();
};

/**
 * Convert the BitArray to an Array of boolean values (slow).
 */
BitArray.prototype.toArray = function() {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(Boolean(this.get(i)));
    }
    return result;
};

/**
 * Returns the total number of bits set to one in this BitArray.
 */
BitArray.prototype.count = function() {
    let total = 0;
    for (let i = 0; i < this.wordArray.length; i++) {
        x = this.wordArray[i];
        // count bits of each 2-bit chunk
        x = x - ((x >> 1) & 0x55555555);
        // count bits of each 4-bit chunk
        x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
        // count bits of each 8-bit chunk
        x = x + (x >> 4);
        // mask out junk
        x &= 0xF0F0F0F;
        // add all four 8-bit chunks
        total += (x * 0x01010101) >> 24;
    }
    return total;
};

/**
 * Inverts this BitArray.
 */
BitArray.prototype.not = function() {
    for (let i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] = ~(this.wordArray[i]);
    }
    return this;
};

/**
 * Bitwise OR on the values of this BitArray using BitArray x.
 */
BitArray.prototype.or = function(x) {
    if (this.length !== x.length) {
        throw 'Arguments must be of the same length.';
    }
    for (let i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] |= x.wordArray[i];
    }
    return this;
};

/**
 * Bitwise AND on the values of this BitArray using BitArray x.
 */
BitArray.prototype.and = function(x) {
    if (this.length !== x.length) {
        throw 'Arguments must be of the same length.';
    }
    for (let i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] &= x.wordArray[i];
    }
    return this;
};

/**
 * Bitwise XOR on the values of this BitArray using BitArray x.
 */
BitArray.prototype.xor = function(x) {
    if (this.length !== x.length) {
        throw 'Arguments must be of the same length.';
    }
    for (let i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] ^= x.wordArray[i];
    }
    return this;
};

BitArray.prototype.concat = function(bitArray) {
    let result = new BitArray(this.length + bitArray.length);
    let resultIndex = 0;

    for (let i = 0; i < this.length; i++) {
        result.set(resultIndex++, this.get(i));
    }

    for (let i = 0; i < bitArray.length; i++) {
        result.set(resultIndex++, bitArray.get(i));
    }

    return result;
};

BitArray.prototype.shiftLeft = function(count, circular) {
    let resultBitArray = new BitArray(this.length);

    for (let resultBitIndex = 0; resultBitIndex < this.length; resultBitIndex++) {
        let dataBitIndex = resultBitIndex + count;

        if (!circular && dataBitIndex > this.length - 1) {
            break;
        }

        dataBitIndex %= this.length;

        resultBitArray.set(resultBitIndex, this.get(dataBitIndex));
    }

    this.buffer = resultBitArray.buffer;
    this.wordArray = resultBitArray.wordArray;
};

/**
 * Gets a slice from the BitArray, from a particular start bit index up to but not including a particular end bit index.
 */
BitArray.prototype.slice = function(startIndex, endIndex) {
    let result = new BitArray(endIndex - startIndex);
    let resultBitIndex = 0;

    for (let dataBitIndex = startIndex; dataBitIndex < endIndex; dataBitIndex++) {
        result.set(resultBitIndex, this.get(dataBitIndex));

        resultBitIndex++;
    }

    return result;
};
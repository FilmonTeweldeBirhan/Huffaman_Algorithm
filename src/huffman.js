const buildHuffmanTree = require("./buildHuffmanTree");
const generateCodes = require("./generateCode");
const encode = require("./encode");
const decode = require("./decode");

// input
let input = "aaab";
let frequencyMap = {};

for (let char of input) {
  frequencyMap[char] = (frequencyMap[char] || 0) + 1;
}

console.log("Frequency of char:", frequencyMap);

let huffmanTree = buildHuffmanTree(frequencyMap);
let codes = {};

console.log("Huffman Graph:", huffmanTree);

generateCodes(huffmanTree, "", codes);

console.log("Huffman Codes:", codes);

let encodedString = encode(input, codes);
console.log("Encoded vString:", encodedString);

let decodedString = decode(encodedString, huffmanTree);
console.log("Decoded String:", decodedString);

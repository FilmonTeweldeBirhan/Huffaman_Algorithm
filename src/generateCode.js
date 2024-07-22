// Function to generate the Huffman Codes
function generateCodes(node, currentCode, codes) {
  if (node.character !== null) {
    codes[node.character] = currentCode;
    return;
  }

  if (node.left !== null) {
    generateCodes(node.left, currentCode + "0", codes);
  }

  if (node.right !== null) {
    generateCodes(node.right, currentCode + "1", codes);
  }
}

module.exports = generateCodes;

// Function to decode the encoded string
function decode(encodedString, huffmanTree) {
  let decodedString = "";
  let currentNode = huffmanTree;

  for (let bit of encodedString) {
    currentNode = bit === "0" ? currentNode.left : currentNode.right;

    if (currentNode.character !== null) {
      decodedString += currentNode.character;
      currentNode = huffmanTree;
    }
  }

  return decodedString;
}

module.exports = decode;

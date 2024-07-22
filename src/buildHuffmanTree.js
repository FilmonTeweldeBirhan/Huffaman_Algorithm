const Node = require("./constructorOfHuffman");

// Function to build the Huffman Tree
function buildHuffmanTree(frequencyMap) {
  let nodes = [];
  for (let char in frequencyMap) {
    nodes.push(new Node(char, frequencyMap[char]));
  }

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.frequency - b.frequency);

    let left = nodes.shift();
    let right = nodes.shift();

    let newNode = new Node(null, left.frequency + right.frequency, left, right);
    nodes.push(newNode);
  }

  return nodes[0];
}

module.exports = buildHuffmanTree;

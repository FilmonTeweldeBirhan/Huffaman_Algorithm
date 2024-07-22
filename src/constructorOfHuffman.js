class Node {
  constructor(character, frequency, left = null, right = null) {
    this.character = character;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;

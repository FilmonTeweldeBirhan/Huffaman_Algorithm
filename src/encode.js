// Function to encode the input string
function encode(input, codes) {
  let encodedString = "";
  for (let char of input) {
    encodedString += codes[char];
  }
  return encodedString;
}

module.exports = encode;

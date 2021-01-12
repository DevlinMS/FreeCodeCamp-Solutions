function rot13(str) {
  let solution = "";
  for(let i = 0; i < str.length; i++) {
    if(regex.test(str.substring(i,i+1))) {
      solution += cipher[str.substring(i,i+1)];
    }
    else {
      solution += str.substring(i,i+1)
    }
  }
  return solution;
}
const regex = /[A-Z]/;
const cipher = {
  "A": "N",
  "B": "O",
  "C": "P",
  "D": "Q",
  "E": "R",
  "F": "S",
  "G": "T",
  "H": "U",
  "I": "V",
  "J": "W",
  "K": "X",
  "L": "Y",
  "M": "Z",
  "N": "A",
  "O": "B",
  "P": "C",
  "Q": "D",
  "R": "E",
  "S": "F",
  "T": "G",
  "U": "H",
  "V": "I",
  "W": "J",
  "X": "K",
  "Y": "L",
  "Z": "M",
}

function palindrome(str) {
  str = rmNonLetters(str.toLowerCase());
  let reverseString = reverse(str);
  if (str === reverseString) {
    return true;
  }
  return false;
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function rmNonLetters(str){
  let regex = /[^a-x0-9]/g;
  return str.replace(regex, "")
}

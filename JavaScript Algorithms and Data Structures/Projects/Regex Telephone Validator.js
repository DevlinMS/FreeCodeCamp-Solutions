function telephoneCheck(str) {
  var number = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  /*
      ^ - start of line
      (1\s?) - first capture
        1 - literal match
        \s? - whitespace match (\s), zero or one times (?)
      ^(1\s?)? - matches with a 1 at the begining ( or a lack of a 1)
      
      (\(\d{3}\)|\d{3}) - second capture
        \( and \) - escape ( to match with ( and ) )
        \d{3} - to match with any digit (\d) three times exaxtly ({3})
        | - or operator
      (\(\d{3}\)|\d{3}) - match with: ("3 digits") or "3 digits"

      [\s\-]? - match with one or zero (?) characters that are in the set ( [] )
        \s - whitespace
        \- - escape to capture "-"

      \d{3} - match 3 digits exactly

      [\s\-]? - same as above

      \d{4}$ - match with 4 digit exactly, and then end of the string ( $ )
  */

  if (number.test(str)) {
    return true;
  }

  return false;
}

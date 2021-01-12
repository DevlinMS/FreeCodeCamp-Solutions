function convertToRoman(num) {
 var thousands = [], hundreds = [], tens = [], ones = [];
    while (num > 0) {
        if (num/1000 >= 1) {
            thousands.push("M");
            num -= 1000;
        }
        else if (num/100 >= 1) {
            hundreds.push("C");
            num -= 100;
        }
        else if (num/10 >= 1) {
            tens.push("X");
            num -= 10;
        }
        else {
            ones.push("I");
            num -= 1;
        }
}

if (hundreds.length == 9) { hundreds = ["CM"]};
if (hundreds.length == 4) { hundreds = ["CD"]};
if (hundreds.length >= 5) { hundreds.splice(0,5,"D")};

if (tens.length == 9) { tens = ["XC"]};
if (tens.length == 4) { tens = ["XL"]};
if (tens.length >= 5) { tens.splice(0,5,"L")};

if (ones.length == 9) { ones = ["IX"]};
if (ones.length == 4) { ones = ["IV"]};
if (ones.length >= 5) { ones.splice(0,5,"V")};

num = thousands.concat(hundreds.concat(tens.concat(ones))).join("");

 return num;
}

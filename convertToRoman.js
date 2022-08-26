/*      Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Rules:
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
*/

let romanNum = ''; 

function convertToRoman(num){
    let numStr = '';

  //convert each number into a string
    numStr = num.toString();

  //if string.length == 1, return the I, II, IV, etc to their corresponding values.
    if (numStr.length == 1) {
        let romNumerals = firstDigit(numStr[0]);
        console.log(romNumerals);
        return romNumerals;
    }

//if string.length == 2, the first number dictates the X's and the second number dictates the I's
    if (numStr.length == 2){
        let i = firstDigit(numStr[1]);
        let x = secondDigit(numStr[0]);
        let romNumerals = x + i;
        console.log(romNumerals);
        return romNumerals;
    }

  //if string.length == 3,. num[0] dictates D's, num[1] dictates X's, num[2] dictates I's.
    if (numStr.length == 3){
        let i = firstDigit(numStr[2]);
        let x = secondDigit(numStr[1]);
        let c = thirdDigit(numStr[0]);
        let romNumerals = c + x + i;
        console.log(romNumerals);
        return romNumerals;
    }

  //And so on and so forth
    if (numStr.length == 4){
        let i = firstDigit(numStr[3]);
        let x = secondDigit(numStr[2]);
        let c = thirdDigit(numStr[1]);
        let m = fourthDigit(numStr[0]);
        let romNumerals = m + c + x + i;
        console.log(romNumerals);
        return romNumerals;
    }
}

//III V
function firstDigit(num){
    if (num <= 3){romanNum = 'I'.repeat(num);}
    else if (num >= 6 && num <= 8){romanNum = 'V' + 'I'.repeat(num - 5)}
    else if (num == 4){romanNum = 'IV'}
    else if (num == 5){romanNum = 'V'}
    else if (num == 9) {romanNum = 'IX'}
    else if (num == 0) {romanNum = ''}
    return romanNum;
}

//XXX L
function secondDigit(num){
    if (num <= 3){romanNum = 'X'.repeat(num);}
    else if (num >= 6 && num <= 8){romanNum = 'L' + 'X'.repeat(num - 5)}
    else if (num == 4){romanNum = 'XL'}
    else if (num == 5){romanNum = 'L'}
    else if (num == 9) {romanNum = 'XC'}
    else if (num == 0) {romanNum = ''}
    return romanNum;
}

// CCC D
function thirdDigit(num){
    if (num <= 3){romanNum = 'C'.repeat(num);}
    else if (num >= 6 && num <= 8){romanNum = 'D' + 'C'.repeat(num - 5)}
    else if (num == 4){romanNum = 'CD'}
    else if (num == 5){romanNum = 'D'}
    else if (num == 9) {romanNum = 'CM'}
    else if (num == 0) {romanNum = ''}
    return romanNum;
}

//MMM ?
function fourthDigit(num){
    if (num <= 9){romanNum = 'M'.repeat(num);}
    else if (num >= 6 && num <= 8){romanNum = 'V' + 'M'.repeat(num - 5)}
    else if (num == 4){romanNum = 'MV'}
    else if (num == 5){romanNum = 'V'}
    else if (num == 9) {romanNum = 'MX'}
    else if (num == 0) {romanNum = ''}
    return romanNum;
}
convertToRoman(3999);

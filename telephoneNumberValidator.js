/*

Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Tests
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false.
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false.
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
telephoneCheck("55 55-55-555-5") should return false.
telephoneCheck("11 555-555-5555") should return false.

Steps

check for country code
    check if country code == 1; true
check for letters that aren't approved symbols eg. - () spaces
    false if unapproved letters/symbols
Remove non-digits from input eg. - () spaces
if input doesn't have both opening and closing brackets; return false
    counter for opening and counter for closing brackets.
    remainder those counters. then sum the remainder results
        if !=1; return false

if input starts with bracket; return false






Old Code I had

function telephoneCheck(str) {
    let alphabRegex = /[A-Za-z?]/gi;
    
	if (alphabRegex.test(str) || str.charAt(0) == '-') {					//  if str has letters -> return false
		console.log('false');
		return false;
	};
    
	let regex = /\D/g;            					// Use regex to remove non-numerals
	let newStr = str.replace(regex, '');
    
	if (newStr.length == 10 || (newStr.length == 11 && newStr.charAt(0) == 1)) {				//  if str.length(after removal of non-numbers) != 10 OR != 11 and doesn't start with 1 -> return false
		console.log('true', "Number:", newStr, "Length:", newStr.length)
		return true;
	}
    
	console.log(false, "Number:", newStr, "Length:", newStr.length)
	return false
}

telephoneCheck("(6054756961)");

*/

function telephoneCheck(str) {
    let alphabRegex = /[A-Za-z?]/gi;
    let obCount = 0;
    let cbCount = 0;
    let dashCount = 0;

    //iterate through str looking for brackets and dashes
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            obCount += 1
            console.log(obCount)
        }
        if (str[i] == ")") {
            cbCount += 1
            console.log(cbCount)
        }
        if (str[i] == "-") {
            dashCount += 1
            console.log(dashCount)
        }
    }

    if (obCount !== cbCount) {
        return false;
    }
    if (dashCount > 2) {
        return false;
    }

    if (str.charAt(0) == "(" && str.charAt(str.length-1) == ")") {      
        console.log('false');
        return false;
    }

	if (alphabRegex.test(str) || str.charAt(0) == '-') {					//  if str has letters -> return false
		console.log('false');
		return false;
	};
    
	let regex = /\D/g;            					// Use regex to remove non-numerals
	let newStr = str.replace(regex, '');

	if (newStr.length == 10 || (newStr.length == 11 && newStr.charAt(0) == 1)) {				//  if str.length(after removal of non-numbers) != 10 OR != 11 and doesn't start with 1 -> return false
		console.log('true', "Number:", newStr, "Length:", newStr.length)
		return true;
	}
    
	console.log(false, "Number:", newStr, "Length:", newStr.length)
	return false
}

telephoneCheck("55 55-55-555-5");
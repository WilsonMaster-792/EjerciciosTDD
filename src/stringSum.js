/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.
 */


function sum(num1, num2){
    return iSNaturalNumber(num1) + iSNaturalNumber(num2);
}

function iSNaturalNumber(input){
    var a = TryParseInt(input, 0);
    if(a < 0){
        return 0
    }
    return a;
}

function TryParseInt(str,defaultValue) {
    var retValue = defaultValue;
    if(str !== null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}
export { sum , iSNaturalNumber};
const palindromes = function (str) {
    let lowerCaseStr = str.toLowerCase();
    console.log(lowerCaseStr)
    let reverseStr = lowerCaseStr.split('').reverse().join('');
    console.log(reverseStr)
    return lowerCaseStr === reverseStr;
};


module.exports = palindromes

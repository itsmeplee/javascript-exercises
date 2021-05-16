const repeatString = function(string, count) {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += string;
    }
    return output;
}

module.exports = repeatString

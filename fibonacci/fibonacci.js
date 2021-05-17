const fibonacci = function (num) {
    let fibNums = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
    }
    return fibNums[num];
};

module.exports = fibonacci

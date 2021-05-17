const getTheTitles = function(arrOfObjs) {
    let titles = [];
    for (let i = 0; i < arrOfObjs.length; i++) {
        titles.push(arrOfObjs[i]['title']);
    }
    return titles;
}

module.exports = getTheTitles;

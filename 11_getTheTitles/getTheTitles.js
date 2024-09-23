const getTheTitles = function(arrayOfBooks) {
    let titles=[];
    for (let book of arrayOfBooks){
        titles.push(book.title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

const palindromes = function (word) {
    //Phase 1: filter
    let wordFilter="";
    for (let i=0;i<word.length;i++){
        let char=word.charAt(i);
        if ((char>="a" && char<="z")||  (char>="A" && char<="Z")|| (char>="0" && char<="9")){
            char=char.toLowerCase();
            wordFilter=wordFilter.concat(char);
        }
    }
    
    //Phase 2 check if it is palindrome

    let reflect="";
    for (let i=wordFilter.length-1;i>=0;i--){
        reflect=reflect.concat(wordFilter.charAt(i));      
    }
    return reflect==wordFilter;
};




// Do not edit below this line
module.exports = palindromes;

const reverseString = function(string) {
    let palabro="";
    for (let i=string.length-1; i>=0; i--){
        palabro=palabro.concat(string.charAt(i));
    }
    return palabro;
};

// Do not edit below this line
module.exports = reverseString;

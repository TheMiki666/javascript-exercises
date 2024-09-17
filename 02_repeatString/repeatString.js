const repeatString = function(string, num) {
    let salida="";
    if (num<0){
        salida="ERROR";
    }else{
        for (let i=1; i<=num;i++){
            salida=salida.concat(string);
        }
    }
 
    return salida;
};

// Do not edit below this lineCD 
module.exports = repeatString;

const fibonacci = function(num) {
    num=parseInt(num);
    if (isNaN(num) || num <0){
        return "OOPS";
    }else if (num==0){
        return 0;
    }else if (num==1 || num==2){
        return 1;
    }else{
        let sum1=1;
        let sum2=1;
        let aux;
        for (let i=3; i<=num; i++){
            aux=sum1;
            sum1=sum2;
            sum2=sum2+aux;
        }
        return sum2;
    }
};

// Do not edit below this line
module.exports = fibonacci;

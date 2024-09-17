const sumAll = function(min, max) {
    if (typeof min!="number" || typeof max!="number"){
        return "ERROR";

    }else if (Math.floor(min)!=min || Math.floor(max)!=max){
        //No son enteros
        return "ERROR";
    }else if (min<0 || max<0){
          //No son positivos o cero
          return "ERROR";

    }else{
        suma=0;
        if (min>max){
            //alteramos el orden de max y min
            let aux=min;
            min=max;
            max=aux;
        }
        for (i=min; i<=max; i++){
            suma +=i;
        }
        return suma;
    }

};

// Do not edit below this line
module.exports = sumAll;

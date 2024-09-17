const removeFromArray = function(array, ...objects) {
    //Primero barremos los argumentos
    for (let i=0; i<objects.length;i++){
        //Y luego barremos la matriz
        for (let j=0; j<array.length; j++){
            if (array[j]===objects[i]){
                //Coincidencia; hay que eliminar
                array.splice(j,1);
                j--; //Hay que desplazar el índice

            }
        }

    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

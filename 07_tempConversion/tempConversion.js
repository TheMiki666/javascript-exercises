const convertToCelsius = function(far) {
  let cel=(far-32)*5/9;
  //Redondeo a una cifra
  return Math.round (cel*10)/10;
  
};

const convertToFahrenheit = function(cel) {
  
  let far=9*cel/5+32;
    //Redondeo a una cifra
    return Math.round (far*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const findTheOldest = function(people) {
    let response={};
    let oldestAge=0;
    let today= new Date ().getFullYear(); 
    for (let person of people){
        let age;
        if (typeof person.yearOfDeath==="undefined"){
            //Living person
            age=today-person.yearOfBirth;
            
        }else{
            //Dead person
            
            age=person.yearOfDeath-person.yearOfBirth;
            
        }
        if (age>oldestAge){
            oldestAge=age;
            response=person;
        }
    }
    return response;
};
/*const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

console.log(findTheOldest (people));*/




// Do not edit below this line
module.exports = findTheOldest;

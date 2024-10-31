"use strict";

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
}


function find(arrayOfNumbers {
    for(const number of arrayOfNumbers) {
        if(number > 60){
            return number;
        
        }
    }
}



// let firstValueOver60 = numbers.find(isOver60);
let firstValueOver60 = find(numbers);
console.log(firstValueOver60);






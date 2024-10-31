"use strict";

//defining a function
// function addEventListener(number1, number2) {
//   //number1.number2 are parameters
//   let result = number1 + number2;
//   return result;
// }
//1. function keyword
//2. function name
// 3. paranthesis () hold the parameters (input Variables) seperated by commas
//4. curly braces are a code block and encolse the function body (the steps)

let add = (number1, number2) => {
  //number1.number2 are parameters
  let result = number1 + number2;
  return result;
};

let add = 9number1,number20  => number1 + number2;



//1. delete function keyword, add arrow after the argument list
//2. remove the name, make the function anonymous

//calling a function
let output = add(2, 2); //function name followed by parenthesis
//          <-------
//when called the function returns its output into the variable on the left
console.log(output); //4



/* FUNCTION DECLARATION
  function name(params){
    statement(s)
    return
  }
*/

// global vs local scope

let num1 = 3 // global
function add(){
  let num2 = 4
  return num1 + num2
}
add()



// add() // calling a function

/* ARROW FUNCTION
  const addTwoNumbers = () => {}
 */

// const addTwoNumbers = (x, y) => {
//   return x + y
// }

const addTwoNumbers = (x, y) => x + y

let addTwo = addTwoNumbers(998383, 818)

/* FUNCTION EXPRESSION
 let addTwoNumbers = function(){}
  */

let convertToCelsius = function(fahrenheit){
  // (32°F − 32) × 5/9 = 0°C
  return (fahrenheit - 32) * 5/9 + '˚C'
}

console.log(convertToCelsius(64))


// Enock
// let ugxToDollars = (amount) => amount/3849.08
// console.log(ugxToDollars(100000)) ☑️



// Kevina
let ugxToDollars = (money) =>{return money/3849.08}
console.log(ugxToDollars(1200000)) 




// function declarations and functions expression and calling and  anonymous functions
// scope && closure && hoisting

// parameters && arguments
// parameters = placeholders
// arguments = data values



// callbacks (asynchronous)
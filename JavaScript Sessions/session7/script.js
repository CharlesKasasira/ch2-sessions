console.clear();

//querySelectorAll()
const para = document.querySelectorAll("p");

//getElementsByTagName 
const main = document.getElementsByTagName('main')

//getElementsByClassName()
const paragraphs = document.getElementsByClassName("anything");

//queySelector
const par = document.querySelector('p')

//getElementById
const para4 = document.getElementById('4')


const celsius = document.getElementById('celsius')
const inputField = document.getElementById('inputField')


let convertToCelsius = function(event){
  event.preventDefault()
  // return (fahrenheit - 32) * 5/9
  celsius.innerHTML = Math.round(((+inputField.value - 32) * 5/9) * 100)/100
}

let arrayOfStrings = ["Saab", "BMW", "Volvo"]
let arrayOfNumbers = [1, 2, 3]
let arrayOfBoolean = [true, false]

const arrayConstant = [0]
const arrayEmpty = []


// Create an arrays
// 1.
let languages = ["javaScript", "python", "c", "java", "c++"]
//2.
const books = new Array(3)


// accessing elements from an array.
languages[2] // c

// Array Methods


// Size or length of an array
languages.length



// fill
books.fill("Data structures in javascript")


// splicing an array

let deletedLanguages = languages.splice(2, 2, "php", "html")
// console.log(deletedLanguages)

languages.splice(1, 1, "Java")






// slice an array
console.log(languages)
const returned = languages.slice(0,-3)

console.log(returned)





//marks =  ["90", "56", "51" "40"]


// 60 - 50

// marks[1]

// marks.splice(1, 100)


// marks.slice(1, 3)



// filter method
//sytnax
// const newArrayName = array.filter((element) => comparison) 
// const newArrayName = array.filter((element) {comparison}) 

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const evenArray = array5.filter((element, index) => element%2 === 0)

// forEach method
//sytnax
// array.forEach((element) => statements)
// array.forEach((element){statements} )

let array6 = ["winnie", "enock", "charles"]

array6.forEach((student, index) => {
  student = student + " " + index
  console.log(student)
})


// reduce method
// Sytnax
// let reducedResult = array.reduce((prev, current, accumulator) => statements, initialAccumulatorValue)
// let reducedResult = array.reduce(() {statements }, initialAccumulatorValue)

let array7 = [1, 2, 3]

const sum = array7.reduce((previous, current) => previous + current)
const sum2 = array7.reduce((previous, current, accumulator) => previous + current, 13)



// map method
// Sytnax
// let mappedResult = array.map((element, index) => statements )

let array8 = ["winnie", "enock", "charles"]

const names = array8.map(
  name => name.toUpperCase()
)

// callback = a function as an argument.

console.log(names)



// adding to arrays
let array9 = [1, 2]
array9.push(3) // [1, 2 ,3]
array9.push("good") 

array9.unshift(3 ) // [3, 1, 2, 3]
array9.unshift(0)
array9.unshift(0)

// removing from arrays
let array10 = [1,2, "true", "bad"]
array10.pop()

array10.shift()


let array11 = ["Charles", "Alex", "Winnie", "Enock", "Ablestate"]

console.log(array11.sort())

array11.pop()
array11.unshift("Kevina")
array11.shift()
array11.pop()
array11.pop()
array11.pop()
array11.push("Nuruh")

// [ "Charles", "Nuruh" ]

// find
// findIndex(element)



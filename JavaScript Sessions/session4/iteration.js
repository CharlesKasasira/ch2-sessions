// while
/*
while(condition){
  statement(s)
}

*/
let count = 5

while(count > 6){
  console.log("This is true ", count)
  count -= 1
}


// do... while
/*
do{
  feed the cat
}while(it is hungry)
 */

// do {
//   console.log("do while") // 24
//   console.log("done") // 24
//   count --
// }while(1 == 200)



// for
/*
for(initialValue; condition; decrement || increment){
  statement(s)
}
*/

// for(count; count > 0; count--){
//   console.log("this true")
// }

// for(let i = 0; i < 10; i++){
//   console.log(i)
// }






// for... in
let student = {
  name: "Jack",
  course: "Full-stack",
  name1: "Jack",
  course1: "Full-stack",
  name2: "Jack",
  course2: "Full-stack",
}

// for(propertyName in student){
//   console.log(student[propertyName])
// }

 

// for... of


let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n); // 1, 3, 7, 12 
}

// 1
// 3
// 7
// 12
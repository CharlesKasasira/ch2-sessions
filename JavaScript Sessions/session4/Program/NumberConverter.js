// 0 1 2 3 4 5 6 7 8 9
// 10 20 30 40 50 60 70 80 90
// hundreds, thousand, million, billion

const ones = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve"
}

let num = 311

console.log(
  ones[num.toString()[0]] + " " + "hundred" + " " + ones[num.toString()[num.toString().length - 1]]

  )
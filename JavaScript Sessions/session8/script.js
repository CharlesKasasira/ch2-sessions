
// const h1 = document.createElement('h1')
// h1.textContent ="hey"

// console.log(h1)


// // document.body.appendChild()
// // console.log("this is before ", document.body.childNodes)

// document.body.appendChild(h1)

// console.log("this is after ", document.body.childNodes)

// // console.log(document.querySelector('h1').parentNode)



const tr = document.createElement('tr')

const td1 = document.createElement('td')
td1.textContent = 1
const td2 = document.createElement('td')
// td2.textContent = "Php"
const context = document.createTextNode('Php')
td2.appendChild(context)
const td3 = document.createElement('td')
td3.textContent = "8000"



document.querySelector('tbody').appendChild(tr)
document.querySelectorAll('tr')[2].appendChild(td1)
document.querySelectorAll('tr')[2].appendChild(td2)
document.querySelectorAll('tr')[2].appendChild(td3)

// console.log(document.querySelector('tbody'))


console.log(document.querySelector('button'))

let count  = 0

const btn = document.querySelector('button')


btn.addEventListener(
  'mouseover', () => {
    // statement(s)
    // console.log("mouseover")
    document.body.style.backgroundColor = 'red'
  }
)
document.querySelector('button').addEventListener(
  'click', () => {
    // statement(s)
    console.log("click")
  }
)

const letter = document.getElementById('letter')

const changeLetter = (event) => {
  letter.innerHTML = String.fromCharCode(event.keyCode)

  if(String.fromCharCode(event.keyCode) === "A"){
    letter.style.backgroundColor = "#e7fbd3"
  } else {
    letter.style.backgroundColor = "#ffc0cb"
  }
}
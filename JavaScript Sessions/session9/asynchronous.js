// console.log("1")
// console.log("2")
// console.log("3")

// synchronous, blocking,single-threaded

const posts = [
  {author: "auther one", title: "javascript", description: "Lorem Ipsum is simply dummy text of the printing and "},
  {author: "auther two", title: "javascript 2", description: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "},
]


function getPosts() {
  posts.map((post, index) => {
    const heading = document.createElement('h1')
    const author = document.createElement('p')
    const desc = document.createElement('p')
  
    heading.innerHTML = post.title
    author.innerHTML = post.author 
    desc.innerHTML = post.description
  
    document.body.appendChild(heading)
    document.body.appendChild(author)
    document.body.appendChild(desc)
  })
}
getPosts()

function createPosts() {
  posts.push({author: "auther three", title: "javascript 3", description: "Lorem Ipsum is simply dummy text of the printing and "})
}


createPosts()




// setTimeout and setInterval

// setTimeout

/* syntax setTimeout
  setTimeout(() => {}, 1000)
*/

// console.log("1")
// setTimeout(() => console.log("2"), 3000)
// console.log("3")



/* syntax setInterval
  setInterval(() => {}, 1000)
*/

// let timer = 100

// let timerID = setInterval(() => {
//   timer -= 1
//   console.log(timer)

//   if(timer === 0){
//     clearInterval(timerID)
//   }
// }, 1000)

// clearInterval
// console.log(timer)
// if(timer === 0){
//   clearInterval(timerID)
// }



// callback, promise, async await

// callback


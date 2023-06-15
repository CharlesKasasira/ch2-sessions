// new Promise((resolveOuter) => {
//   resolveOuter(new Promise((resolveInner) => {
//     setTimeout(resolveInner, 1000);
//   }));
// })

const posts = [
  {author: "auther one", title: "javascript", description: "Lorem Ipsum is simply dummy text of the printing and "},
  {author: "auther two", title: "javascript 2", description: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "},
]

function getPosts() {
  posts.map(function (post, index) {
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

function createPosts() {
  posts.push({author: "auther three", title: "something", description: "Lorem Ipsum is simply dummy text of the printing and "})
}

/* promise syntax
  const myPromise = new Promise((resolve, reject)){
    //..statements
    resolve()
    //...statements
    reject()
  }
*/


const myPromise = new Promise((resolve, reject) => {
  if(2 === 2){
    resolve()
  } else {
    reject()
  }
});

// promise starts here
const postsPromise = new Promise((resolve, reject) => {
  resolve()

  reject("something wrong")
})


postsPromise
  .then(() => createPosts())
  .then(() => getPosts())
  .catch((error) => console.log(error))


// async await

async function functionName() {}

const arrowFn = async () => {}



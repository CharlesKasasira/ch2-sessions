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

function createPosts(callbackfn, post) {
  posts.push(post)
  callbackfn()
}

createPosts(getPosts, {author: "auther three", title: "something", description: "Lorem Ipsum is simply dummy text of the printing and "})

// callback and High Order Function

// function highOrderFunction(callback){}
// function1(function2)
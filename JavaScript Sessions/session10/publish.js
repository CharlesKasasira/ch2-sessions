const title = document.getElementById("title")
const body = document.getElementById("body")
const author = document.getElementById("author")
const postNumber = document.getElementById("postNumber")

const publishPost = async (event) => {
  event.preventDefault()
  await axios.post('https://kasasira.herokuapp.com/posts', {
    'postNumber': postNumber.value,
    'author': author.value,
    "title": title.value,
    "body": body.value
  })
  .then(response => console.log(response))
  console.log(event)
}
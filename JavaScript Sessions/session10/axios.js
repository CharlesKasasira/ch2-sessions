axios("https://kasasira.herokuapp.com/posts").then((response) => {
  response.data.map((post, index) => {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.textContent = post.title;
    p.textContent = post.body;
    // img.setAttribute("src", post.url)
    document.body.appendChild(h1);
    document.body.appendChild(p);
  });
});





// axios.put('http://jsonplaceholder.typicode.com/posts/100', {
//     'userId': 4,
//     "title": "Title one",
//     "body": "This is the body"
//   })
//   .then(response => console.log(response))

// axios
//   .patch("https://kasasira.herokuapp.com/posts/13", {
//     title: "Title one",
//   })
//   .then((response) => console.log(response));

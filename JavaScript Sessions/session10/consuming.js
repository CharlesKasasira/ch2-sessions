fetch("https://kasasira.herokuapp.com/posts")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.map((post, index) => {
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      h1.textContent = post.title;
      p.textContent = post.body;
      // img.setAttribute("src", post.url)
      document.body.appendChild(h1);
      document.body.appendChild(p);
    });
  })
  .catch((error) => console.log(error));

// fetch('http://jsonplaceholder.typicode.com/posts',
//   {
//     method: 'POST',
//     mode: 'no-cors',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: {
//       'userId': 11,
//       "id": 101,
//       "title": "Title one",
//       "body": "This is the body"
//     }
//   }
// )
//   .then((response) => console.log(response.json()))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

// fetch("https://kasasira.herokuapp.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     author: "charles kasasira",
//     body: "The Instagram logo we are working on today is a gradient background and a rounded square with two circles, one in the center and the other in the top right to represent sort of a camera. So to structure this, we will create a container class for our background containing an Instagram class that contains two classes circle and ball.",
//     postNumber: "14",
//     title: "CSS Art: Instagram Logo with pure CSS",
//   }),
// })
//   .then(response => console.log(response))

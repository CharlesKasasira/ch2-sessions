const h1 = document.querySelector('h1')

let count = sessionStorage.getItem("count") || 0
h1.innerHTML = count
const increment = () => {
  count++
  sessionStorage.setItem('count', count)
  h1.innerHTML = sessionStorage.getItem("count") || count + 1
}

const clearCount = () => {
  sessionStorage.removeItem("count")
  count = 0
  h1.innerHTML = count
}



// Web Storage Api
// localStorage and sessionStorage

//set 
// storage.setItem("username", "mukasa")

// access
// storage.getItem("username") // mukasa

// delete from the storage
// storage.removeItem("username")

// Your Code Here
const api_url = "http://localhost:9001/updateBook"
async function updateBook(bookId){
    let response = await fetch('http://localhost:9001/updateBook',{
        method: "PATCH",
        headers: {
            "Content_Type": "applications/json"
        },
        body: JSON.stringify({
            "id": 3,
            "title": "Legends of Arathrae",
        }),
    }
    )
let updatedBook = await response.json();
console.log(updatedBook)
}
async function displayBooks() {
    let response = await fetch("http://localhost:3001/listBooks");
    let books = await response.json();
    for (let i = 0; i < books.length; i++) {
      let list = document.createElement("li");
      list.innerHTML = books[i].title;
      document.body.append(list);
      let input = document.createElement("input");
      list.append(input);
      let submit = document.createElement("button");
      submit.addEventListener("click", newValue(books[i].id, input.value));
      submit.textContent = "submit";
      list.append(submit);
    }
  }
  displayBooks();
  
  async function newValue(bookId, value) {
    let response = await fetch("http://localhost:3001/updateBook", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `${bookId}`,
        quantity: `${value}`,
      }),
    });
    let newBook = await response.json();
    console.log(newBook);
  }

  //Bonus//
  async function deleteBook(booId){
    let userPromptResponse = window.prompt(`Are you sure you want to delete book: ${bookId}?`)
    let response = await fetch(`${listBooks_url}/${booksId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"

        }

    })
    let data = await response.json();
    alert(`Deleted book: ${bookId}`)
    console.log(data)
}

const BASE_URL =
  "https://console.firebase.google.com/project/book-management-3e1df/database/book-management-3e1df-default-rtdb/data/~2F";

// ----------------------
// GET BOOKS
// ----------------------
async function getBooks() {
  let res = await fetch(BASE_URL);
  let data = await res.json();
  displayBooks(data.documents || []);
}
getBooks();

// ----------------------
// ADD BOOK (POST)
// ----------------------
document.getElementById("addBtn").addEventListener("click", async () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;

  let body = {
    fields: {
      title: { stringValue: title },
      author: { stringValue: author },
      price: { integerValue: price },
      image: { stringValue: image }
    }
  };

  await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(body)
  });

  getBooks();
});

// ----------------------
// DELETE BOOK
// ----------------------
async function deleteBook(docName) {
  await fetch(`https://firestore.googleapis.com/v1/${docName}`, {
    method: "DELETE"
  });
  getBooks();
}

// ----------------------
// UPDATE AUTHOR (PATCH)
// ----------------------
async function updateAuthor(docName) {
  let newAuthor = prompt("Enter new author name:");

  if (!newAuthor) return;

  let body = {
    fields: {
      author: { stringValue: newAuthor }
    }
  };

  await fetch(`https://firestore.googleapis.com/v1/${docName}?updateMask.fieldPaths=author`, {
    method: "PATCH",
    body: JSON.stringify(body)
  });

  getBooks();
}

// ----------------------
// DISPLAY BOOKS
// ----------------------
function displayBooks(books) {
  let container = document.getElementById("bookContainer");
  container.innerHTML = "";

  books.forEach((item) => {
    let { name, fields } = item;

    let card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${fields.image.stringValue}">
      <h3>${fields.title.stringValue}</h3>
      <p>Author: ${fields.author.stringValue}</p>
      <p>₹${fields.price.integerValue}</p>

      <button onclick="updateAuthor('${name}')">Update</button>
      <button onclick="deleteBook('${name}')">Delete</button>
    `;

    container.append(card);
  });
}

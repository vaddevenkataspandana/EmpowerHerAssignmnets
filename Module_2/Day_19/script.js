import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// ---------------------------
// 🔥 Replace this with YOUR config
// ---------------------------
const firebaseConfig = {
  apiKey: "AIzaSyBhbG2auCUUwJDDj4IeibXJF2s4Oa4IZ1M",
  authDomain: "book-management-3e1df.firebaseapp.com",
  databaseURL: "https://book-management-3e1df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "book-management-3e1df",
  storageBucket: "book-management-3e1df.firebasestorage.app",
  messagingSenderId: "649810706236",
  appId: "1:649810706236:web:136e9588e7657ca894e839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addBookForm = document.getElementById("addBookForm");
const bookListDiv = document.getElementById("bookList");

// ---------------------------
// Add Book
// ---------------------------
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  await addDoc(collection(db, "books"), {
    title,
    author,
    year: Number(year),
  });

  addBookForm.reset();
  loadBooks();
});

// ---------------------------
// Load Books
// ---------------------------
async function loadBooks() {
  bookListDiv.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "books"));

  querySnapshot.forEach((docData) => {
    const book = docData.data();
    const id = docData.id;

    const div = document.createElement("div");
    div.innerHTML = `
      <p>
        <strong>${book.title}</strong> - ${book.author} (${book.year})
        <button onclick="deleteBook('${id}')">Delete</button>
        <button onclick="editBook('${id}', '${book.title}', '${book.author}', ${book.year})">Edit</button>
      </p>
    `;

    bookListDiv.appendChild(div);
  });
}

loadBooks();

// ---------------------------
// Delete Book
// ---------------------------
window.deleteBook = async function (id) {
  await deleteDoc(doc(db, "books", id));
  loadBooks();
};

// ---------------------------
// Edit Book
// ---------------------------
window.editBook = function (id, title, author, year) {
  const newTitle = prompt("New Title:", title);
  const newAuthor = prompt("New Author:", author);
  const newYear = prompt("New Year:", year);

  if (!newTitle || !newAuthor || !newYear) return;

  updateDoc(doc(db, "books", id), {
    title: newTitle,
    author: newAuthor,
    year: Number(newYear),
  });

  loadBooks();
};

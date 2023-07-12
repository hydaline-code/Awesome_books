const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addbtn = document.getElementById('add');

let books = [];


function removeBook(index) {
  if (index >= 0 && index < books.length) {
    books = books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  }
}

function addNewbook() {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
  titleInput.value = '';
  authorInput.value = '';
}

addbtn.addEventListener('click', () => addNewbook());

const storage = localStorage.getItem('books');
if (storage) {
  books = JSON.parse(storage);
  displayBooks();
}

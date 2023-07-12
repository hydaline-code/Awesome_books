const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addbtn = document.getElementById('add');

let books = [];

function displayBooks() {
  const booksList = document.getElementById('books');
  booksList.innerHTML = '';
  books.forEach((book, index) => {
    const list = document.createElement('li');
    const list1 = document.createElement('li');
    list.textContent = `${book.title}`;
    list1.textContent = `${book.author}`;
    booksList.appendChild(list);
    booksList.appendChild(list1);
    const removeBtn = document.createElement('button');
    const line = document.createElement('hr');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    booksList.appendChild(removeBtn);
    booksList.appendChild(line);
    removeBtn.addEventListener('click', () => removeBook(index));
  });
}
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

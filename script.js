/* eslint-disable max-classes-per-file */
class BookStore {
  constructor() {
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addBtn = document.getElementById('add');
    this.books = [];
    this.addBtn.addEventListener('click', () => this.addNewBook());
    this.displayBooks();
  }

  displayBooks() {
    const booksList = document.getElementById('books');
    booksList.innerHTML = '';
    this.books.forEach((book, index) => {
      const row = document.createElement('tr');

      const titleCell = document.createElement('td');
      titleCell.textContent = `"${book.title}" by ${book.author}`;
      row.appendChild(titleCell);

      const removeCell = document.createElement('td');
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove');
      removeCell.appendChild(removeBtn);
      row.appendChild(removeCell);

      booksList.appendChild(row);

      removeBtn.addEventListener('click', () => this.removeBook(index));
    });
  }

  addNewBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;

    if (title && author) {
      const book = { title, author };
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
      this.titleInput.value = '';
      this.authorInput.value = '';
    }
  }

  removeBook(index) {
    if (index >= 0 && index < this.books.length) {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    }
  }
}

const bookStore = new BookStore();

// Retrieve books from local storage on page load
window.addEventListener('load', () => {
  const storage = localStorage.getItem('books');
  if (storage) {
    bookStore.books = JSON.parse(storage);
    bookStore.displayBooks();
  }
});

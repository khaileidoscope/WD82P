const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContainer = document.getElementById("modal");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const addBookBtn = document.getElementById("add-book-btn");
const mainContainer = document.getElementById("main");

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

function addNewBook(event) {
  event.preventDefault();

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;

  const book = bookFactory(title, author, pages);
  console.log(book);

  clearInput();
  closeModal();
  appendNewBook(book);
}

function bookFactory(title, author, pages) {
  return {
    title,
    author,
    pages,
  };
}

function clearInput() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}

function appendNewBook(book) {
  //     <!-- <article class="book">
  //     <h2 class="book-title">Harry Potter</h2>
  //     <p class="book-author">J.K. Rowling</p>
  //     <p class="book-pages">500</p>
  // </article> -->
  const article = document.createElement("article");
  article.classList.add("book");

  const h2 = document.createElement("h2");
  h2.classList.add("book-title");
  h2.textContent = book.title;

  const authorParagraph = document.createElement("p");
  authorParagraph.classList.add("book-author");
  authorParagraph.textContent = book.author;

  const pagesParagraph = document.createElement("p");
  pagesParagraph.classList.add("book-pages");
  pagesParagraph.textContent = book.pages;

  article.append(h2, authorParagraph, pagesParagraph);
  mainContainer.appendChild(article);
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
addBookBtn.addEventListener("click", addNewBook);

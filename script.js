const myLibrary = [];

function Book(name, author) {
  // the constructor...
  this.name = name;
  this.author = author;
}
let card = document.querySelector(".card");
let info = document.createElement("p");

function addBookToLibrary() {
  // do stuff here
  const Book1 = new Book("That time i got reincarnated as a Pleb" , "John Doe");
  myLibrary.push(Book1);

  

  for(let i in myLibrary){
    
    info.innerHTML = `${myLibrary[i].name} - ${myLibrary[i].author}`;
    card.appendChild(info);
  }
}

addBookToLibrary();

const newBook = document.querySelector("#newBook");
const formDialog = document.querySelector("#formDialog");

newBook.addEventListener("click" , () => {
  formDialog.showModal();
});

let form = document.querySelector("#actualForm");
form.addEventListener("submit" , (e) => {
  e.preventDefault();
  submit();
  formDialog.close();
  form.reset();
});

const submit = () => {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;

  let newCard = document.createElement("p");
  newCard.innerHTML = `${title} - ${author}`;
  card.appendChild(newCard);
}

let close = document.getElementById("close");
close.addEventListener("click" , (e)=>{
  e.preventDefault();
  formDialog.close();
  form.reset();
});
form.reset();
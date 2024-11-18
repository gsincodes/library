const myLibrary = [];

function Book(name, author) {
  // the constructor...
  this.name = name;
  this.author = author;
}

function addBookToLibrary() {
  // do stuff here
  const Book1 = new Book("That time i got reincarnated as a Pleb" , "John Doe");
  myLibrary.push(Book1);

  let card = document.querySelector(".card");

  for(let i in myLibrary){
    let info = document.createElement("p");
    info.innerHTML = `${myLibrary[i].name} - ${myLibrary[i].author}`;
    card.appendChild(info);
  }
}

addBookToLibrary();




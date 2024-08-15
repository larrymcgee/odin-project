const myLibrary = [];
let numBooks = 305;

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", (e) => {
    console.log(document.querySelector("#title").value);
    console.log(document.querySelector("#author").value);
    console.log(document.querySelector("#pages").value);

    
    dialog.close();
    addBookToLibrary();
});

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function displayBooks() {
    const container = document.querySelector(".container");
    const content = document.createElement("div");    
    content.classList.add("content");

    container.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        const list = document.createElement("ul");
        const title = document.createElement("li");
        title.textContent = book.title;
        const author = document.createElement("li");
        author.textContent = book.author;
        const pages = document.createElement("li");
        pages.textContent = book.pages;
        const remove = document.createElement("button");
        remove.textContent = "Remove Book";
        remove.setAttribute("index", i);
        remove.addEventListener("click", function(e) {
            myLibrary.splice(e.target.getAttribute("index"), 1);
            displayBooks();
        });
        // remove.classList.
        const read = document.createElement("button");
        read.textContent = "Read Book";
        read.setAttribute("index", i);
        if(book.read) {
            read.classList.add("read");
        }
        read.addEventListener("click", function (e) {
            let btn = e.target;
            let book1 = myLibrary[btn.getAttribute("index")];
            book1.read = !book1.read;
            displayBooks();
        });

        list.appendChild(title);
        list.appendChild(author);
        list.appendChild(pages);

        container.appendChild(list);
        container.appendChild(remove);
        container.appendChild(read);
        // console.log("Index is: " + remove.getAttribute("index"));
    }
}
 
function addBookToLibrary(title, author, pages) {
    newBook = new Book("Born A Crime", "Trevor Noah", numBooks);
    myLibrary.push(newBook);
    numBooks = numBooks + 1;
    displayBooks();
}


const btn = document.querySelector("#btn");
// btn.addEventListener("click", addBookToLibrary);







        // let card = "<ul><li>Title: " + myLibrary[i].title +
        // "<li>Author: " + myLibrary[i].author +
        // "<li>Pages: " + myLibrary[i].pages + "</ul>" +
        // "<button>Remove Book</button>";
        // container.innerHTML += card;
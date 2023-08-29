// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");
myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/book.png") myImage.setAttribute("src", "images/cafe_hoacau.png").setAttribute("height", "100")
    else myImage.setAttribute("src", "images/book.png")
}

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button")

function setUserName() {   
    let userName = prompt("Please enter your name.");
    localStorage.setItem("name", userName);
    myHeading.textContent = `JavaScript is cool, ${localStorage.getItem("name")}`;
}

myButton.onclick = () => {
    setUserName()
}

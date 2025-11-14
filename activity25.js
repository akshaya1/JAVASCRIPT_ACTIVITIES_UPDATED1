// script.js - External JavaScript file

// Function to change heading
function changeHeading() {
    let heading = document.getElementById("myHeading");
    heading.innerText = "Heading Changed via External JS!";
    heading.style.color = "green";
}

// Function to show alert
function showAlert() {
    alert("Hello! This is an alert from external JS.");
}

// Function to add list item
function addListItem() {
    let ul = document.getElementById("myList");
    let li = document.createElement("li");
    li.innerText = "New Item added via External JS";
    ul.appendChild(li);
}

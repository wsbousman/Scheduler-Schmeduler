// define variables

let set1 = document.getElementById("btn1");
let set2 = document.getElementById("btn2");
let set3 = document.getElementById("btn3");

// display from local storage

document.getElementById("row1").placeholder = localStorage.row1;
document.getElementById("row2").placeholder = localStorage.row2;
document.getElementById("row3").placeholder = localStorage.row3;

// change color of input box when time passes

// save to local storage when save button is clicked

setFunction1 = function(event) {
    event.preventDefault();
    localStorage.row1 = document.querySelector("input[id='row1']").value;
};
setFunction2 = function(event) {
    event.preventDefault();
    localStorage.row2 = document.querySelector("input[id='row2']").value;
};
setFunction3 = function(event) {
    event.preventDefault();
    localStorage.row3 = document.querySelector("input[id='row3']").value;

};

// set default input box content

setDefault1 = function () {
    if (localStorage.row1 = "undefined") {
        document.getElementById("row1").placeholder = "Enter new event here"};
    };
setDefault2 = function () {
    if (localStorage.row2 = "undefined") {
        document.getElementById("row2").placeholder = "Enter new event here"};
    };
setDefault3 = function () {
    if (localStorage.row3 = "undefined") {
        document.getElementById("row3").placeholder = "Enter new event here"};
    };

// event listeners

set1.addEventListener("click", setFunction1);
set2.addEventListener("click", setFunction2);
set3.addEventListener("click", setFunction3);

// function calls

setDefault1 ();
setDefault2 ();
setDefault3 ();

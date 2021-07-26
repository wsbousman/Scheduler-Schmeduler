let set1 = document.getElementById("btn1");

// display from local storage

document.getElementById("row1").placeholder = localStorage.row1;

// change color of input box when time passes

// save to local storage when save button is clicked

setFunction = function(event) {
    event.preventDefault();
    localStorage.row1 = document.querySelector("input[id='row1']").value;
};

set1.addEventListener("click", setFunction);
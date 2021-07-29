// define variables
let set1 = document.getElementById("btn1");
let set2 = document.getElementById("btn2");
let set3 = document.getElementById("btn3");
let set4 = document.getElementById("btn4");
let set5 = document.getElementById("btn5");
let set6 = document.getElementById("btn6");
let set7 = document.getElementById("btn7");
let set8 = document.getElementById("btn8");
let set9 = document.getElementById("btn9");
let def1 = localStorage.row1 || ["Enter new event here."];
let def2 = localStorage.row2 || ["Enter new event here."];
let def3 = localStorage.row3 || ["Enter new event here."];
let def4 = localStorage.row4 || ["Enter new event here."];
let def5 = localStorage.row5 || ["Enter new event here."];
let def6 = localStorage.row6 || ["Enter new event here."];
let def7 = localStorage.row7 || ["Enter new event here."];
let def8 = localStorage.row8 || ["Enter new event here."];
let def9 = localStorage.row9 || ["Enter new event here."];
let Present = new Date().getHours();

// set default input box prompt/display saved content from local storage
document.getElementById("row1").placeholder = def1;
document.getElementById("row2").placeholder = def2;
document.getElementById("row3").placeholder = def3;
document.getElementById("row4").placeholder = def4;
document.getElementById("row5").placeholder = def5;
document.getElementById("row6").placeholder = def6;
document.getElementById("row7").placeholder = def7;
document.getElementById("row8").placeholder = def8;
document.getElementById("row9").placeholder = def9;

// change color of input box when time passes

function setColor() {
if (Present = 9) {
    document.getElementById("row1").style.backgroundColor = "#ff3333"; 
    document.getElementById("row2").style.backgroundColor = "#33cc33"; 
    document.getElementById("row3").style.backgroundColor = "#33cc33"; 
    document.getElementById("row4").style.backgroundColor = "#33cc33"; 
    document.getElementById("row5").style.backgroundColor = "#33cc33"; 
    document.getElementById("row6").style.backgroundColor = "#33cc33"; 
    document.getElementById("row7").style.backgroundColor = "#33cc33"; 
    document.getElementById("row8").style.backgroundColor = "#33cc33"; 
    document.getElementById("row9").style.backgroundColor = "#33cc33"; 
};
};

//else if (Present > 12 && Present < 17) {
  //  document.body.style.backgroundColor = "red";};};

// save to local storage functions
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
setFunction4 = function(event) {
    event.preventDefault();
    localStorage.row4 = document.querySelector("input[id='row4']").value;
};
setFunction5 = function(event) {
    event.preventDefault();
    localStorage.row5 = document.querySelector("input[id='row5']").value;
};
setFunction6 = function(event) {
    event.preventDefault();
    localStorage.row6 = document.querySelector("input[id='row6']").value;
};
setFunction7 = function(event) {
    event.preventDefault();
    localStorage.row7 = document.querySelector("input[id='row7']").value;
};
setFunction8 = function(event) {
    event.preventDefault();
    localStorage.row8 = document.querySelector("input[id='row8']").value;
};
setFunction9 = function(event) {
    event.preventDefault();
    localStorage.row9 = document.querySelector("input[id='row9']").value;
};

// event listeners
set1.addEventListener("click", setFunction1);
set2.addEventListener("click", setFunction2);
set3.addEventListener("click", setFunction3);
set4.addEventListener("click", setFunction4);
set5.addEventListener("click", setFunction5);
set6.addEventListener("click", setFunction6);
set7.addEventListener("click", setFunction7);
set8.addEventListener("click", setFunction8);
set9.addEventListener("click", setFunction9);

// function calls
setColor ();

/*
red: #ff3333
green: #33cc33
*/
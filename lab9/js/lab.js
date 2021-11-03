/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 1 November 2021
 * License: Public Domain
 */


//locate div called "output". Assign it a variable
//FIND THE ELEMENT!
var outputEl = document.getElementById("output");

//create a new element and assign it a variable.
var new1El = document.createElement("p");

//change the html attribute of new1El to say something new
new1El.innerHTML = "This is Katana.";

//create a second new element.
new2El = document.createElement("p");

//change the second element to say something new
new2El.innerHTML = "Is this working?";

//append both new elements one at a time using appendChild().
//first word is the name of the variable we declared up top.
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements on the page
new1El.style.color = "pink";
new1El.style.fontSize = "50px"
new2El.style.color = "red";
new2El.style.fontSize = "20px";
outputEl.style.backgroundColor = "blue";

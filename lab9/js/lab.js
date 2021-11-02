/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 1 November 2021
 * License: Public Domain
 */

//locate div called "output". Assign it a variable
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

//create a new element and assign it a variable.
var new1El = document.createElement("p");

//change the html attribute of new1El to say something new
var new1El.innerHTML = "This is Katana.";
new1El.id = "first";

//create a second new element.
var new2El = document.createElement("p");
new1El.id = "second";

//change the second element to say something new
new2El.innerHTML = "Is this working?";

//append both new elements one at a time using appendChild()
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements on the page
  new1El.style.color = "pink";
  new2El.style.color = "red";

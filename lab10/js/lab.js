/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 3 November 2021
 * License: Public Domain
 */


 // Create an event handler within the JS file that listens for a button click.
 var buttonEl = document.getElementById("my-button");
 buttonEl.addEventListener("click", function(){
   // pushing button brings up prompt window.
   var userName = prompt("Input your name: ", "");
   console.log("userName =", userName);

   //make the received string into an array.
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   //sort that array.
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   //make the array back into a string.
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   //gives results of "namesorted"
   return nameSorted;
 })

 //writes the results in output area

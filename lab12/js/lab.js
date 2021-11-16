/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 8 November 2021
 * License: Public Domain
 */

//  Create a function sortingHat()
function sortingHat(str) {
let len = str.length;
let mod = len % 4;
  if (mod == 0){
    return "Gryffindor";
  }
  else if (mod == 1){
      return "Ravenclaw";
  }
  else if (mod == 2){
      return "Slytherin";
  }
  else if (mod == 3){
      return "Hufflepuff";
  }
}

// that takes a string as an argument: function sortingHat(str)
// counts the letters in str and assigns it to a variable length
// uses modulus (% operator) to get the remainder with 4: mod = length % 4;
// mod will now be a value between 0 and 3
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3

let myButton = $("#button");
myButton.click(function(){
  let name = $("#input").value;
  let house = sortingHat(name);
  newText = "<p>The Sorting Hat has Sorted you into " + house + "</p>";
  $("#output").html(newText);
})

/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 15 November 2021
 * License: Public Domain
 */

//  Create a function sortingHat()
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
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

$("#button").click(function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat says you are in " + house + ". Good for you.</p>";
  document.getElementById("output").innerHTML = newText;
})

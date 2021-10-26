/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 24 October 2021
 * License: Public Domain
 */


//sortsUserName - takes a string and returns the reverse of that string. Reverses the characters from an input.

function sortsUserName() {
  //userName - Produces a prompt window that gets the user's name.
  var userName = window.prompt("Enter Name -", "Ai Hasaname");
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

  //these processes can also be done in a single line:
  //  userName.toLower().split("").sort.join.
  return nameSorted;

}

//output
document.writeln("Thank you for participating in this Katana System test, ", sortsUserName(), ".", "</br>");

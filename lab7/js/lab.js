/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 24 October 2021
 * License: Public Domain
 */


//reverseUserName - takes a string and returns the reverse of that string. Reverses the characters from an input.

function reverseUserName() {
  //userName - Produces a window that gets the user's name.
  var userName = prompt("Enter name -", "Ai Hasaname");
  console.log("userName =", userName);

  //make string into an array.
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
document.writeln("Thank you for participating in this Katana System test, ", reverseUserName(), "!", "</br>");

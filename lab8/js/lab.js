/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 27 October 2021
 * License: Public Domain
 */


 function AmazingFunction(w){
     return (w * 3 == 21);
 }

//test function
console.log("Is 'w' Eight?", AmazingFunction(8));
console.log("Is 'w' Seven?", AmazingFunction(7));

array = ["3", "2", "7", "15", "8"]
console.log("My Array", array);

var results = array.map(function(w){
  return w * 5;
})

//output

//should return [15,10,35,75,40]
console.log("Array multiplied by 5:", results)

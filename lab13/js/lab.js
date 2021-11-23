/*
 * Author: Vincent Wenzler, Katana Parker
 *Created: 22 November 2021
 *License: Public Domain
 With help from Vivian Zheng with the loop function
 */
world = "";

 //FizzBuzz function
 // print Fizz in log if multiple of 3
 // print Buzz in log if multiple of 5
 // print Boom in log if multiple of 7
 //if multiple of more than one number, print the rest
function fizzbuzzboom(str) {
  var str = "";
  for (i=1; i <=200; i++) {
      temp = "" + i + ": ";
      if (i % 3 == 0) {
          temp += "Fizz";
      }
      if(i % 5 == 0) {
          temp += "Buzz";
      }
      if(i % 7 == 0){
          temp += "Boom";
      }
  // if value is above lngth of 5 adds ! to the end
      if(temp.length > 5){
        temp += "!";
      }
 // adds new line after every value
      temp +="<br>";
      str += temp;
   }
   $("#output").html(str)
}

$("#button").click(function(){
  fizzbuzzboom(world);
})

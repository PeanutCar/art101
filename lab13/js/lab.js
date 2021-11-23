/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 22 November 2021
 * License: Public Domain
 */
//"Fizzbuzz Function"
// Loop through numbers 1 to 200, listing them as you go
// If the number is a multiple of 3, if should print "Fizz!"
// If the number is a multiple of 5, it should print "Buzz!"
// If the number is a multiple of 7, it should print "Boom!"
// If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on

            //"Fizzbuzz Function"
// Loop through numbers 1 to 200, listing them as you go
for (var i=0; i<=200; i++) {
// If the number is a multiple of 3, if should print "Fizz!"
if(i % 3 === 0) {
// If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on
if(i % 3 === 0&& i % 5 === 0&& i % 7 === 0){
console.log("FizzBuzzBOOM!");
}
else {
console.log("Fizz!")
}}

// If the number is a multiple of 5, it should print "Buzz!"
else if (i % 5 === 0) {
if(i % 3 === 0&& i % 5 === 0){
console.log("FizzBuzzBOOM!");
}
else {
console.log("Buzz!!")
}}

// If the number is a multiple of 7, it should print "Boom!"
else if (i % 7 === 0) {
if(i % 3 === 0&& i % 5 === 0&& i % 7 === 0){
console.log("FizzBuzzBOOM!");
}
else {
console.log("Boom!!!")
}}

else {
console.log(i);
}
document.getElementById("output").innerHTML = console.log()
}

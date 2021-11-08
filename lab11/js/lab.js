/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 8 November 2021
 * License: Public Domain
 */

 //* Using jQuery, create buttons to add to the challenge, problems, and results sections of your document //jquery is linked and working.

      //make button for sections 1,2, and 3
// Find the element with $ // Create button for section 1,
 // Give it a text label // Add it to the section

 $("#challenges").append("<button id ='button1'>Press me??");

 $("#problems").append("<button id ='button2'>Press me~!");

 $("#results").append("<button id ='button3'>Press me...");


        //button1
//detects button press via an event listener
$("#button1").click(function(){
  //toggles button's class to 'special'
$(this).parent().toggleClass("special");
})

        //button2
//detects button press via an event listener
$("#button2").click(function(){
  //toggles button's class to 'special'
$(this).parent().toggleClass("special");
})

        //button3
//detects button press via an event listener
$("#button3").click(function(){
  //toggles button's class to 'special'
$(this).parent().toggleClass("special");
})



//go into CSS and style each of the classes
//test each button

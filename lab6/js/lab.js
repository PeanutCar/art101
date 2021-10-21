/*
 * Author: Katana Parker <kmparker@ucsc.edu>
 * Created: 20 October 2021
 * License: Public Domain
 */


//MyTransport - Lists methods I use to get around.
myTransport = ["feet", "car", "bus", "telekinesis", "chocobo"];

  //MyMainRide - The family car. Describes the car's make, model, color, year, and age.
myMainRide = {
      make: "volkswagen",
      model: "Jetta",
      color: "Plain Milk",
      year: 2013,
      age: function() {
        return 2021 - year;
      }
}

//Output
document.writeln("How I get around: ", myTransport, "</br>");
document.writeln("Family Car: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

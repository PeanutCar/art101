/*
 * Author: Vincent Wenzler, Katana Parker
 *Created: 29 November 2021
 *License: Public Domain
 */

 var myUrl = "http://numbersapi.com/11/30/date";

//
 function callAjax() {
   console.log("click");
   // Using the core $.ajax() method
   $.ajax({
       // API endpoint
       url: myUrl,
       // Any data to send
       // data: { id: 123},
       // POST or GET request
       type: "GET",
       // data type we expect back
       /* dataType : "json", */
   })
   // If the request succeeds
   // data is passed back
   .done(function(data) {
       console.log("Success:", data);
       $("#output").html(JSON.stringify(data));
       })

   // If the request fails
   .fail(function(request,error) {
       console.log(request, error);

 	})

 }

 $("#activate").click(callAjax);

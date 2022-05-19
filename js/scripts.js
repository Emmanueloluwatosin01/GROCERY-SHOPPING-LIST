$(document).ready(function() {
  $("#food").submit(function(event) {
    event.preventDefault();
    let input1 = $("#feed1").val().toUpperCase();
    let input2 = $("#feed2").val().toUpperCase();
    let input3 = $("#feed3").val().toUpperCase();
    let input4 = $("#feed4").val().toUpperCase();
    let input5 = $("#feed5").val().toUpperCase();
    let input6 = $("#feed6").val().toUpperCase();
    $("#feed1").val("");
    $("#feed2").val("");
    $("#feed3").val("");
    $("#feed4").val("");
    $("#feed5").val("");
    $("#feed6").val("");
    let newArray = [input1, input2, input3, input4, input5, input6];
    let newArray1 = newArray.sort();
   
    // $("#food").hide();
    newArray1.forEach(function(language) {
      $("#output").append( "<li>" + language + "</li>");

    });


  });
 
});
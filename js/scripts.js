//business logic


//UI logic

$(function() {
  $("#numForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("#numInput").val();



    $(".outputNum").text(userInput);
  });

});

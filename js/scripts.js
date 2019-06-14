//business logic

//function to find the sum of all numbers between 0 to userInput
function numSum(userInput){
    var inputSum = 0;
      for(var i = 0; i <= userInput; i++){
        inputSum += i;
         }
    console.log(inputSum)
         }

//mutating numSum function to display each num in console, instead of add all num
var userInput = parseInt(userInput);
function numList(userInput) {
  console.log(userInput);
  var outputArray = [];
  for(var i = 0; i <= userInput; i++){
    var allNum = outputArray.push[i];
  }
  console.log(outputArray);
}


//UI logic

$(function() {
  $("#numForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("#numInput").val();
    var userOutput = numSum(userInput);


    $(".outputNum").text(userOutput);
  });

});

//business logic



//function to find the sum of all numbers between 0 to userInput
// function numSum(userInput){
//     var inputSum = 0;
//       for(var i = 0; i <= userInput; i++){
//         inputSum += i;
//          }
//     console.log(inputSum)
//          }

//function for userName to address userName
function aName(userInput){
    var yourName = $("#nameInput").val();

    $(".outputNum").text(nameInput);
}

//mutating numSum function to display each num in console, instead of add all num
function allNum(userInput){
    var numArray = [];
    var inputNum = 0;
    for(var i = 0; i <= userInput; i++){
      inputNum = i;
      console.log(inputNum);
      numArray.push(" " + inputNum);
      console.log(numArray);
    }

    $(".outputNum").text(numArray);
}

// var userInput = parseInt(userInput);
// function numList(userInput) {
//   console.log(userInput);
//   var outputArray = [];
//   for(var i = 0; i <= userInput; i++){
//     var allNum = outputArray.push[i];
//   }
//   console.log(outputArray);
// }


//UI logic

$(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var userName = $("#nameInput").val();
    console.log(userName);
    $("#nameForm").hide();
    $("#greetUser").show();
    $(".name").text(userName);

  });

  $("#numForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#numInput").val();
    var userOutput = allNum(userInput);
    allNum(userInput);

  });
});

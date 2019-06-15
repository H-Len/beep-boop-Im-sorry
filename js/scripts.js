//business logic


//function for userName to address userName
function aName(nameInput){
    var yourName = $("#nameInput").val();

    $(".outputNum").text(nameInput);
}

//adding exceptions
function beepExceptions(i) {
  var inputNum = i;
  var userName = $("#nameInput").val();
  if(inputNum === 3) {
    inputNum = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    numArray.push(" " + inputNum);
  } else if(inputNum === 2) {
    inputNum = "Boop!";
    numArray.push(" " + inputNum);
  } else if (inputNum === 1) {
    inputNum = "Beep!";
    numArray.push(" " + inputNum);
  } else {
    inputNum = inputNum;
    numArray.push(" " + inputNum);
  }
}

//function to display each num individually
var numArray = [];
function allNum(userInput){
  var inputNum = 0;
  for(var i = 0; i <= userInput; i++){
    inputNum = i;
    // numArray.push(" " + i);
    inputNum = beepExceptions(i);
    console.log(numArray);
  }
  numArray.forEach(function() {

  });
  $(".outputNum").text(numArray);
}


//function to check individual values in number






//UI logic

$(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var userName = $("#nameInput").val();
    console.log(userName);
    $("#nameForm").hide();
    $(".greetUser").show();
    $(".name").text(userName);

  });

  $("#numForm").submit(function(event) {
    event.preventDefault();
    // $("#numForm").reset();
    var userInput = $("#numInput").val();
    var userOutput = allNum(userInput);
    beepExceptions(userOutput);
  });

});








// var numDigits = numInput.split("");
// console.log(numDigits);
// numDigits.forEach(function(digit) {
//   if(digit === 3) {
//     inputNum = 3;
//   } else if(digit === 2) {
//     inputNum = 2;
//   } else if (digit === 1) {
//     inputNum = 1;
//   } else {
//     digit = digit;
//   }
// });

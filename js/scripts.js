//business logic


//function for userName to address userName
function aName(nameInput){
    var yourName = $("#nameInput").val();

    $(".outputNum").text(nameInput);
}

//adding exceptions
function beepExceptions(i) {
  var inputNum = i;
  if(inputNum === 3) {
    inputNum = "I'm sorry, Dave. I'm afraid I can't do that.";
    numArray.push(" " + inputNum);
  } else if(inputNum === 2) {
    inputNum = "Boop!";
    numArray.push(" " + inputNum);
    console.log(inputNum);
  } else if (inputNum === 1) {
    inputNum = "Beep!";
    numArray.push(" " + inputNum);
  } else {
    inputNum = inputNum;
    numArray.push(" " + inputNum);
  }
  console.log(numArray);
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
    beepExceptions(userOutput);

  });
});

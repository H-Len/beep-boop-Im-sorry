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
  } else if(inputNum === 2) {
    inputNum = "Boop!";
  } else if (inputNum === 1) {
    inputNum = "Beep!";
  } else {
    inputNum = inputNum;
  }
}

//function to display each num individually
function allNum(userInput){
  var numArray = [];
  var inputNum = 0;
  for(var i = 0; i <= userInput; i++){
    inputNum = i;
    console.log(i);
    inputNum = beepExceptions(i);
    numArray.push(" " + inputNum);
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

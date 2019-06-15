//business logic

// //function to check individual values in number
// //also needs to check to see if an exception is greater than the last exception digit found
function multiDigit(numInput) {
  var inputDigit = numInput.toString();
  var eachDigit = inputDigit.split("");

  eachDigit.forEach(function(digit) {
    numSleuth = 0;
    if('3' === digit) {
      numSleuth = 3;
      //breakout of loop: it's 3
      return numSleuth;
    } else if ('2' === digit && 2 > numSleuth) {
      numSleuth = 2;

    } else if ('1' === digit && 1 > numSleuth) {
      numSleuth = 1;
    }

  });

  return numSleuth;
}


//adding exceptions
function beepExceptions(i) {
  var inputNum = i;
  var userName = $("#nameInput").val();
  multiDigit(inputNum);
  if(numSleuth === 3) {
    inputNum = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    numArray.push(" " + inputNum);
  } else if(numSleuth === 2) {
    inputNum = "Boop!";
    numArray.push(" " + inputNum);
  } else if (numSleuth === 1) {
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
      // inputNum = i;
      inputNum = beepExceptions(i);

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
    $(".greetUser").show();
    $(".name").text(userName);
  });

  $("#numForm").submit(function(event) {
    event.preventDefault();
    // $(".btn").click(function() {
    //   // $("#numInput").reset();
    // });
    // $("#numForm").reset();
    var userInput = $("#numInput").val();
    var results = multiDigit(userInput);
    var userOutput = allNum(userInput);
    beepExceptions(userOutput);
  });

});

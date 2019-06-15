//business logic

// var hotKeys = ['1', '2', '3'];
// var exceptions = ["Beep!", "Boop!", "I'm sorry, " + userName + ". I'm afraid I can't do that."];
//
// var output = function(userInput) {
//   var exceptionOutput = "";
//   for (var i = hotKeys.length-1; i >= 0; i--) {
//     while (userInput >= hotKeys[i]) {
//       console.log(userInput);
//       exceptionOutput += exceptions[i];
//       console.log(exceptionOutput);
//       userInput -= hotKeys[i];
//       console.log(userInput);
//     }
//   }
//   return exceptionOutput;
// }


//adding exceptions
function beepExceptions(i) {
  var inputNum = i;
  var userName = $("#nameInput").val();
  multiDigit({userInput});
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

// //function to check individual values in number
// //also needs to check to see if an exception is greater than the last exception digit found
function multiDigit(numInput) {
  var inputDigit = numInput.toString();
  var eachDigit = inputDigit.split("");

  //function to display each num individually
  var numArray = [];
  function allNum(userInput){
    var inputNum = 0;
    for(var i = 0; i <= userInput; i++){
      inputNum = i;
      inputNum = beepExceptions(i);
      console.log(numArray);
    }
    numArray.forEach(function() {

    });
    $(".outputNum").text(numArray);
  }

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
    alert(numSleuth);

  });

  return numSleuth;
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

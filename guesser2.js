// var boxResults = document.getElementById('box-results');
// var numberInput = document.getElementById('guess-field');
// var lastGuess = document.getElementById('your-last-guess');
// var hiOrLow = document.getElementById('hi-or-low');
// var guessButton = document.querySelector('.guess-submit');
// var clearButton = document.querySelector('.clear-button');
// var saveButton =  document.querySelector('.save');
// var resetButton = document.querySelector('.reset');
// var newMin = document.querySelector('.new-min');
// var newMax = document.querySelector('.new-max');
// var min = parseInt(newMin.value);
// var max = parseInt(newMax.value);
// var newRandomNumber = randomNumber();
//
// function randomNumber() {
//   return Math.floor((Math.random() * (max - min) + min));
// }
//
//   console.log(newRandomNumber);
//
// guess-submit
// guess-field
// box-results

$(".guess-submit").on("click", function(e) {
  e.preventDefault();
  var userInput = $(".guess-field").val();
  $(".box-results").innerText() = userInput;
})

// guessButton.addEventListener('click', function (){
//   var text = numberInput.value;
//   boxResults.innerText = text;
//   var playerGuess = parseInt(text);
//
//   if (isNaN(playerGuess)) {
//     alert("Not a Number!");
//     lastGuess.innerText = "Not a numeric value!";
//     boxResults.textContent = ":(";
//     hiOrLow.textContent = "Please try again!!";
//   } else if (playerGuess > max) {
//     alert("Above Max Value");
//     lastGuess.innerText = "Guess too high!";
//     boxResults.textContent = ":(";
//     hiOrLow.textContent = "Please try a lower guess!";
//   } else if (playerGuess < min) {
//     alert("Below Min Value");
//     lastGuess.innerText = "Guess too low!";
//     boxResults.textContent = ":(";
//     hiOrLow.textContent = "Please try a higher guess!";
//   } else {
//     checkGuess(playerGuess);
//   };
//
//
// });
//
// function checkGuess(playerGuess) {
//
//   console.log('user guess: ', playerGuess);
//
//   if (playerGuess === newRandomNumber) {
//     console.log('user guess equals random number');
//     lastGuess.textContent = "You Guessed Correctly!"
//     boxResults.textContent = "Boom!";
//     hiOrLow.textContent = "Hit reset to play again";
//   } else if (playerGuess < newRandomNumber) {
//     console.log('in user guess less than random number');
//     lastGuess.textContent = "Your last guess was"
//     boxResults.textContent = playerGuess;
//     hiOrLow.textContent = "That is too low";
//   } else if (playerGuess > newRandomNumber) {
//     console.log('user guess is bigger than random number');
//     lastGuess.textContent = "Your last guess was"
//     boxResults.textContent = playerGuess;
//     hiOrLow.textContent = "That is too high";
//   }
// }
//
// saveButton.addEventListener('click', function() {
//   min = parseInt(newMin.value);
//   max = parseInt(newMax.value);
//   newRandomNumber = randomNumber(min, max);
//   console.log(newRandomNumber, min, max);
// });
//
// function clearButtonEnable () {
//   clearButton.disabled = true;
// };
//
// numberInput.addEventListener('input', function() {
//   if (numberInput === "") {
//     clearButtonEnable();
//   } else {
//     clearButton.disabled = false;
//   }
// });
//
// resetButton.addEventListener('click', function() {
//   newRandomNumber = randomNumber();
//   lastGuess.textContent = "Let us play again!";
//   boxResults.textContent = "?";
//   hiOrLow.textContent = "Try to guess my number!";
//   newMin.value = 1;
//   newMax.value = 100;
// });
//
// clearButton.addEventListener('click', function () {
//   numberInput.value = "";
//   lastGuess.textContent = "";
//   boxResults.textContent = "";
//   hiOrLow.textContent = "";
// });

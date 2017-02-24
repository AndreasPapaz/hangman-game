var rickAndMorty = ["Rick+Sanchez", "Morty+Smith", "Dimension+thirty+five+c", "Meeseeks", "Gazorpazorp", "Get+Sch"];

var currentWord = document.getElementById('current-word');
var scoreboard = document.getElementById('scoreboard');
var guessRemaining = document.getElementById('guess-remaining');
var alreadyGuessedDiv = document.getElementById('already-guessed');


var blanks = [];
var letters = [];
var hidden = "";
var wins = 0;
var letters = [];
var randomChar = "";
var hiddenChar = "";
var attempts = "";


function randomRick() {
  randomChar = rickAndMorty[Math.floor(Math.random() * rickAndMorty.length)].toUpperCase();
  hiddenChar = randomChar.split("");
  return hiddenChar;
}

function reset() {
  
  randomRick();
  
  // blanks= [];
  blanks.length = 0; //when i had these set before the .innerHTML fix they would not work?
  // letters= [];
  letters.length = 0; //when i had these set before the .innerHTML fix they would not work?
  
  attempts = 12;
  
  for (var i = 0; i < hiddenChar.length; i++) {
    if (hiddenChar[i] === "+"){
      blanks.push("+");
    }
    else {
      blanks.push("_ ");
    }
  };
  
//  how i was defining these before is why this script would not work;
  scoreboard.innerHTML = "Wins: " + wins;
  currentWord.innerHTML = "Current Word: " + blanks.join("");
  guessRemaining.innerHTML = "Number of Guesses Remaining: " + attempts;
  alreadyGuessedDiv.innerHTML = "Letters Already Guessed: ";
  
};

reset();


function lettersCompare() {
    console.log(hiddenChar);
  for (var x = 0; x < hiddenChar.length; x++) {
    if (hiddenChar[x] === userGuess){
      blanks[x] = userGuess
      currentWord.innerHTML = "Current Word: " + blanks.join(" ");
    }
   }
 };

function lettersMissed() {
  var duplicate = letters.includes(userGuess);
  var duplicateHidden = hiddenChar.includes(userGuess);
  
  if (duplicate === false && duplicateHidden === false){
    letters.push(userGuess);
    attempts--;
    guessRemaining.innerHTML = "Number of Guesses Remaining: " + attempts;
    alreadyGuessedDiv.innerHTML = "Letters Already Guessed: " + letters.join(", ");
  }
  // else {
  //   alert("you have guessed this letter");
  // }
  

}


document.onkeyup = function(event) {
  // find a way to use only alphabet keys????
  // userGuess = event.key.toUpperCase();
  userGuess = event.key.toUpperCase();
  
  lettersMissed();  
  lettersCompare();

  
//   i want to add a print to the page of the correct word before the alert
//  i also need to fix the attempts counter!

  if (blanks.toString() === hiddenChar.toString()) {
    
    currentWord.innerHTML = "Current Word: " + hiddenChar.toString();
    wins++;
    alert("you have won! the word was " + randomChar);
    reset();
    
  }
  if (attempts < 0){
    alert("sorry try again");
    reset();
  }
};
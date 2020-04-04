
// element selectors
var timeLeft = document.querySelector("#timeLeft")
var ans1 = document.querySelector("#ans1")
var ans2 = document.querySelector("#ans2")
var ans3 = document.querySelector("#ans3")
var ans4 = document.querySelector("#ans4")
var ansCheck = document.querySelector("#ansCheck")
var quizBlock = document.querySelector("#quizBlock")
var title = document.querySelector("#title")
var question = document.querySelector("#question")
// tracked variables
var secondsLeft = 120;
var currentQuestion = 1

// functions to write answers to page

function questionTwo(){
    title.textContent = 
    question.textContent =
    ans1.textContent =
    ans2.textContent =
    ans3.textContent =
    ans4.textContent =
}

function questionThree(){
    
    }

function questionFour(){
    
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if(secondsLeft <= 0) {
        secondsLeft = 0
        clearInterval(timerInterval);
    }

  }, 1000);
}

setTime()

quizBlock.addEventListener("click", function(event) {
    event.preventDefault();
    if(currentQuestion === 1){
        if(event.target.matches("#ans4")) {
            ansCheck.textContent = "Correect!"
            currentQuestion++

        }else{
            ansCheck.textContent = "Wrong! =("
            secondsLeft = secondsLeft - 10
            currentQuestion++
        }
    }else if(currentQuestion === 2){

    }else if(currentQuestion === 3){

    }else{

    }
    
  });




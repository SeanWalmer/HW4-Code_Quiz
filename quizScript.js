
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
var timerInterval = 0
// creating local storage var for result of the quiz
// var result = localStorage.getItem("result");

// Interval start for the timer
function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft;
  
      if(secondsLeft <= 0) {
          secondsLeft = 0
          clearInterval(timerInterval);
      }
  
    }, 1000);
  }
  
  setTime()
  
// functions to write answers to page

function questionTwo(){
    title.textContent = "Javascript"
    question.textContent = "What statement about javascript is true?"
    ans1.textContent = "Java is short for Javascript"
    ans2.textContent = "Javascript is the only language you need to make a webpage"
    ans3.textContent = "Javascript adds interactivity to webpages"
    ans4.textContent = "Javascript is a strongly typed language"
}

function questionThree(){
    title.textContent = "Local Storage"
    question.textContent = "What statment is about local stoage is false?"
    ans1.textContent = "local storage persists after you close your browser"
    ans2.textContent = "javascript can store information to local storage"
    ans3.textContent = "cookies and local storage are the same thing"
    ans4.textContent = "objects can be stored in local storage via JSON commands"
    }

function questionFour(){
    title.textContent = "Free"
    question.textContent = "This question is free! I promise I am not tring anything tricky here. The correct answer is labled below. Trust me..."
    ans1.textContent = "correct"
    ans2.textContent = "wrong"
    ans3.textContent = "wrong"
    ans4.textContent = "wrong"
}


// event listener that checks the question you are on then the correct answer for that question.
quizBlock.addEventListener("click", function(event) {
    event.preventDefault();
    if(currentQuestion === 1){
        if(event.target.matches("#ans4")) {
            ansCheck.textContent = "Correct!"
            currentQuestion++
            questionTwo()
        }else{
            ansCheck.textContent = "Wrong! =("
            secondsLeft = secondsLeft - 10
            currentQuestion++
            questionTwo()
        }
    }else if(currentQuestion === 2){
        if(event.target.matches("#ans3")) {
            ansCheck.textContent = "Correct!"
            currentQuestion++
            questionThree()
        }else{
            ansCheck.textContent = "Wrong! =("
            secondsLeft = secondsLeft - 10
            currentQuestion++
            questionThree()
        }
    }else if(currentQuestion === 3){
        if(event.target.matches("#ans3")) {
            ansCheck.textContent = "Correct!"
            currentQuestion++
            questionFour()
        }else{
            ansCheck.textContent = "Wrong! =("
            secondsLeft = secondsLeft - 10
            currentQuestion++
            questionFour()
        }
    }else{
        if(event.target.matches("#ans1")) {
            ansCheck.textContent = "Correct!"
            currentQuestion++
            clearInterval(timerInterval);
            alert("you trusted!")
            localStorage.setItem("result", secondsLeft);
            window.location.replace("report.html");
        }else{
            ansCheck.textContent = "Wrong! =("
            secondsLeft = secondsLeft - 10
            currentQuestion++
            clearInterval(timerInterval);
            alert("why no trust? ;_;")
            localStorage.setItem("result", secondsLeft);
            window.location.replace("report.html");
        }
    }
    
  });




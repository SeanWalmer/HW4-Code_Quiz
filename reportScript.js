var initials = ""

// grabs local storage and element and then sets element equal to storage
var score = document.querySelector("#score");
var result = localStorage.getItem("result");
score.textContent = result;

// creating the player object to store High scores
var leaderboard = JSON.parse(localStorage.getItem("leaderboard"))
if( leaderboard === null){
leaderboard = {
    initial: [],
    score: []
};
};
console.log(leaderboard)
// store the player high score to local storage
var submit = document.querySelector("#submit");

submit.addEventListener("click", function(){
    event.preventDefault();
    initials = document.querySelector("#hsInitial").value;
    
    if(initials === ""){
        alert("You must fill out the form to submit your score")
    }else{
        leaderboard.initial.push(initials)
        leaderboard.score.push(result)
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
        window.location.replace("leaderboard.html");
    }
});
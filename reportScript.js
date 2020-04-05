// grabs local storage and element and then sets element equal to storage
var score = document.querySelector("#score");
var result = localStorage.getItem("result");
score.textContent = result;

// store the player high score to local storage

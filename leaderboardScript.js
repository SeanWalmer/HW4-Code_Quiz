var list = document.querySelector("#leaderboard")
var leaderboard = JSON.parse(localStorage.getItem("leaderboard"))
console.log(leaderboard)
console.log(leaderboard.score.length)

function renderScores(){
    for(var i = 0; i < leaderboard.score.length; i++){
        var li = document.createElement("li")
        li.textContent = leaderboard.initial[i] + ", Score: " + leaderboard.score[i]
        li.classList.add("list-group-item")
        list.appendChild(li)
    }
};

renderScores()

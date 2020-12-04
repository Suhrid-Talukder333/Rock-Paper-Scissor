"user strict";

var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("player");
const compScore_span = document.getElementById("computer");
const scoreBoard_div = document.getElementsByClassName("score-board");
const result_div = document.getElementById("rslt");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");

function ai(){
    const choices = ["rock","paper","scissor"];
    let choice = Math.floor(Math.random() * (3)); 
    return choices[choice];
}


function game(userChoice) {
    const computerChoice = ai();
    if(computerChoice === userChoice) {
        return ("draw");
    }
    else if(computerChoice === "rock") {
        if(userChoice === "scissor") {
            return ("You Lose");
        }
        else if(userChoice === "paper") {
            return ("You win")
        }
    }
    else if(computerChoice === "paper") {
        if(userChoice === "rock") {
            return ("You Lose");
        }
        else if(userChoice === "scissor") {
            return ("You win")
        }
    }
    else if(computerChoice === "scissor") {
        if(userChoice === "paper") {
            return ("You Lose");
        }
        else if(userChoice === "scissor") {
            return ("You win")
        }
    }
}



function main() {
rock_div.addEventListener('click', function () {
    const result = game("rock");
    if(result == "draw") {
        rock_div.style.border = "6px solid yellow";
        setTimeout(() => rock_div.style.border = "4px solid cornsilk",500);
        result_div.innerHTML = "It's A dramatical DRAW";
    }
    else if(result == "You Lose") {
        rock_div.style.border = "6px solid red";
        compScore++;
        compScore_span.innerHTML = compScore;
        setTimeout(() => rock_div.style.border = "4px solid cornsilk",500);
        result_div.innerHTML = result;
    }
    else if(result == "You win") {
        rock_div.style.border = "6px solid green";
        userScore++;
        userScore_span.innerHTML = userScore;
        setTimeout(() => rock_div.style.border = "4px solid cornsilk",500);
        result_div.innerHTML = result;
    }
});
paper_div.addEventListener('click', function () {
    const result = game("paper");
    if(result == "draw") {
        paper_div.style.border = "6px solid yellow";
        setTimeout(() => paper_div.style.border = "4px solid cornsilk",500);
        result_div.innerHTML = "It's A dramatical DRAW";
    }
    else if(result == "You Lose") {
        paper_div.style.border = "6px solid red";
        compScore++;
        compScore_span.innerHTML = compScore;
        setTimeout(() => paper_div.style.border = "4px solid cornsilk",500);
        result_div.innerHTML = result;
    }
    else if(result == "You win") {
        paper_div.style.border = "6px solid green";
        userScore++;
        userScore_span.innerHTML = userScore;
        setTimeout(() => paper_div.style.border = "4px solid cornsilk",500);
        result_div.innerHTML = result;
    }
});

scissor_div.addEventListener('click', function () {
    const result = game("scissor");
    if(result == "draw") {
        scissor_div.style.border = "6px solid yellow";
        setTimeout(() => scissor_div.style.border = "4px solid cornsilk",500);
        result_div.innerHTML = "It's A dramatical DRAW";
    }
    else if(result == "You Lose") {
        scissor_div.style.border = "6px solid red";
        setTimeout(() => scissor_div.style.border = "4px solid cornsilk",500);
        compScore++;
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = result;
    }
    else if(result == "You win") {
        scissor_div.style.border = "6px solid green";
        setTimeout(() => scissor_div.style.border = "4px solid cornsilk",500);
        userScore++;
        userScore_span.innerHTML = userScore;
        result_div.innerHTML = result;
    }
});
}

main();



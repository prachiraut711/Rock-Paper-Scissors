let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");           //to access msg class paragraph.
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//for computer random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);   //Math,random()gives no's from 0 to 1, * 3 means give number 0 to 2 and Math.floor will not give values after the decimal point.
    return options[randIdx];                         //it means id randIdx= 1 then options[randIdx] means options[1] which paper will return.
};

const drawGame = () => {
    msg.innerText = "Game was Draw!, Play again";
    msg.style.backgroundColor = " #081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {                   //means when usewin === true
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ,Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ,${compChoice} beats  your${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();    
    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {               //in this compChoice is either paper or scissor.
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){       //in this compChoice is either rock or scissor.
            userWin = compChoice === "scissors" ? false: true;
        } else {                                 //her userChoice = scissors so comp is either rock,paper.
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

//for user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");   //get id of indiviual choice which is in rock,paper,scissors.
        playGame(userChoice);
    });
});


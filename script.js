let choices = document.querySelectorAll(".choice");
let playerChoose = document.querySelector("#playerChoose");
let compChoose = document.querySelector("#compChoose");
let msg = document.querySelector("#msg");
let playerResult = document.querySelector("#playerResult");
let compResult = document.querySelector("#compResult");

let playerScore = 0;
let compScore = 0;

//Generate random choice
const getCompChoice = () =>{
    const option = ["rock","paper","scissor"];
    const ranInd =Math.floor(Math.random() * 3);
    return option[ranInd];
};

const showWinner = (result,playerChoice,compChoice) =>{
    playerChoose.innerText = `You choose: ${playerChoice}`;
    compChoose.innerText = `Comp choose: ${compChoice}`;
    switch(result){
        case "You win 😊":
            msg.innerText = result;
            msg.style.color = "green";
            playerScore ++;
            playerResult.innerText = playerScore;
            break;
        case "You lose 😞":
            msg.innerText = result;
            msg.style.color = "red";
            compScore ++;
            compResult.innerText = compScore;
            break;
        
    };
};

const drawGame = (result,playerChoice,compChoice) =>{
    playerChoose.innerText = `You choose: ${playerChoice}`;
    compChoose.innerText = `Comp choose: ${compChoice}`;
    msg.innerText = result;
    msg.style.color = "#686868";
};

//Compare
const playGame = (playerChoice) => {
    const compChoice = getCompChoice();
    let result = "";

    if(playerChoice === compChoice){
        result = "Game is draw. Play Again 👍";
        drawGame(result,playerChoice,compChoice);
    }else{
        switch(playerChoice){
            case "rock":
                result = (compChoice === "scissor") ? "You win 😊" : "You lose 😞";
                break;
            case "paper":
                result = (compChoice === "rock") ? "You win 😊" : "You lose 😞";
                break;
            case "scissor":
                result = (compChoice === "paper") ? "You win 😊" : "You lose 😞";
                break;
        }
    showWinner(result,playerChoice,compChoice);
    };
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});


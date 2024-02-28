let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const compChoice = () =>{
    // rock,paper,scissor 
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}
const drawgame = () =>{
    msg.innerText = "Draw ! Try again";
    msg.style.backgroundColor = "rgb(18, 18, 47)";
}
const restartgame = (userScorePara,compScorePara) =>{
    if(userScorePara.innerText === "10" || compScorePara.innerText === "10"){
        userScorePara.innerText = "0";
        compScorePara.innerText = "0";
        userScore = 0;
        compScore = 0;
    }
}
const showWinner = (userWin,userChoice,computerChoiceResult) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win !! Your ${userChoice} beats ${computerChoiceResult}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${computerChoiceResult} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }

    // restart the game 
    restartgame(userScorePara,compScorePara);
}
const playgame = (userChoice) =>{
    // generate computer choice 
    const computerChoiceResult = compChoice();
    if(userChoice === computerChoiceResult){
        // draw game 
        drawgame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            // computer choice : paper,scissor 
            userWin = computerChoiceResult === "paper"? false : true; 
        }else if(userChoice==="paper"){
            // computer choice : rock,scissor 
            userWin = computerChoiceResult==="rock"?true: false;
        }else{
            // userChoice = scissor, computer choice : rock,paper
            userWin = computerChoiceResult ==="rock"?false: true;
        }
        showWinner(userWin,userChoice,computerChoiceResult);
    }
}
choices.forEach((choice) =>{
       choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id")
       playgame(userChoice);
    });
});
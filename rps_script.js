// const document = require('document');
let max = 3, min = 1;
function getCompsChoice(){
    let disp = document.getElementById("comp");
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(a){
        case 1: 
            disp.innerHTML = "the computer has picked rock"
            break;
        case 2: 
            disp.innerHTML = "the computer has picked paper"
            break;
        case 3: 
            disp.innerHTML = "the computer has picked scissor"
            break;
        default:
            disp.innerHTML = "no results"
            break;
        }
    // document.getElementById("display").innerHTML = `The computer has picked ${a}`
    return a;
}
function theGame(myChoice, compsChoice){
    let player = document.getElementById("player");
    player.innerHTML = `You have picked ${myChoice}`;
    let message = document.getElementById("message");
    if(myChoice == 'rock'){
        if(compsChoice == 2){
            message.innerHTML = "the computer wins"
        }
        else if(compsChoice == 1){
            message.innerHTML = "its a draw"
        }
        else{
            message.innerHTML = "you win"
        }
    }
    else if(myChoice == 'paper'){
        if(compsChoice == 3){
            message.innerHTML = "the computer wins"
        }
        else if(compsChoice == 2){
            message.innerHTML = "its a draw"
        }
        else{
            message.innerHTML = "you win"
        }
    }
    else if(myChoice == 'scissor'){
        if(compsChoice == 1){
            message.innerHTML = "the computer wins"
        }
        else if(compsChoice == 3){
            message.innerHTML = "its a draw"
        }
        else{
            message.innerHTML = "you win"
        }
    }
    else{
        console.log('no results');
    }
}
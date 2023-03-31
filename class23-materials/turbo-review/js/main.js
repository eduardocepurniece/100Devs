// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'bro';
alert(sentence.endsWith('?') ? 'is a question' : 'is not a question');
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let words = 'Damn bro, i\'m trying so hard to become a jr.dev, it\' ain\'t even real';
let newStr = words.replace('jr.dev', 'sofrware engineer');
console.log(newStr);
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random = Math.random();
    if(random < 0.33){
        return 'rock';
    }else if(random < 0.66){
        return 'paper';
    }else{
        return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function gamble(userPlay){
    let botPlay = rockPaperScissors();
    if((userPlay === 'rock' && botPlay === 'scissors') || (userPlay === 'paper' && botPlay === 'rock') || (userPlay === 'scissors' && botPlay === 'paper')){
        console.log('You Win');
    }else if(userPlay === botPlay){
        console.log('You Tied');
    }else{
        console.log('You Lose');
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function gambleGamble(arr){
    arr.forEach(play => gamble(play));
}

gambleGamble(['rock','rock','rock','rock', 'rock']);
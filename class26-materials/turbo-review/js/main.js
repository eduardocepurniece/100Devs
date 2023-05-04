// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let sentence = 'This is a sentence.'
console.log(sentence);
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let lettersArr = ['T','h','i','s']
lettersArr = lettersArr.join('');
alert(lettersArr);
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function rockPaperLizard(){
    const randomizer = Math.random();
    if(randomizer < 0.2) return 'rock';
    else if(randomizer < 0.4) return 'paper';
    else if(randomizer < 0.6) return 'lizard';
    else if(randomizer < 0.8) return 'spock';
    else return 'scissors';
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function playPlay(pChoice){
    let bChoice = rockPaperLizard();
    if((pChoice === 'scissors' && bChoice === 'paper') || (pChoice === 'paper' && bChoice === 'rock') || (pChoice === 'rock' && bChoice === 'lizard') || (pChoice === 'lizard' && bChoice === 'spock') || (pChoice === 'spock' && bChoice === 'scissors') || (pChoice === 'scissors' && bChoice === 'lizard') || (pChoice === 'lizard' && bChoice === 'paper') || (pChoice === 'paper' && bChoice === 'spock') || (pChoice === 'spock' && bChoice === 'rock') || (pChoice === 'rock' && bChoice === 'scissors')){
        console.log('Player Wins');
    }else if(pChoice === bChoice){
        console.log('It\'s a tie!');
    }else{
        console.log('Bot Wins');
    }
}

playPlay(rockPaperLizard());
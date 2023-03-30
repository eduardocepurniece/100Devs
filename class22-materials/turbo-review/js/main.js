// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '  water    '
favDrink = favDrink.trim();
console.log(favDrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruits = 'banana, apple, grape, mango';
console.log(fruits.includes('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let gambleBot = Math.random();
    if(gambleBot < 0.33){
        return 'rock';
    }else if(gambleBot < 0.66){
        return 'paper';
    }else{
        return 'scissors';
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function gambleGamble(userInput){
    let bot = rockPaperScissors();
    if((userInput === 'rock' && bot === 'scissors') || (userInput === 'scissors' && bot === 'paper') || (userInput === 'paper' && bot === 'rock')){
        console.log ('You won');
    }else if(userInput === bot){
        console.log('You Tied');
    }else {
        console.log( 'You Lost');
    }
}
gambleGamble('rock');
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function gambleAddiction(arr){
    arr.forEach(play => {
        gambleGamble(play);
    });
}

gambleAddiction(['rock', 'paper', 'scissors', 'rock', 'rock', 'paper']);
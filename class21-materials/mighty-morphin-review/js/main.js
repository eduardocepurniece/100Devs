// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
 let holiday;
 holiday = 'chriristmas';
 holiday = holiday.toUpperCase();
 console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'some random string doug';
alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absolute(n1, n2, n3, n4, n5){
    return Math.abs(100 - n1 - n2 - n3 - n4 - n5);
}
console.log(absolute(20, 30, 40, 50, 60));

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowTide(n1, n2, n3){
    console.log(Math.min(n1, n2, n3), Math.max(n1, n2, n3));
}
lowTide(5,33,7);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    return Math.random() < 0.5 ? 'heads' : 'tails';
}
console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function gamble(n){
    for(let i = 0; i < n; i++){
        console.log(headsOrTails());
    }
}

gamble(17);
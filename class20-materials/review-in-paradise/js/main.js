// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = 'mashed potatos';
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let randomVar = 'tralalalala';
alert(randomVar[2]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divide3(n1, n2, n3){
    alert((n1 / n2) * n3);
}
divide3(2,5,3);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n){
    console.log(Math.sqrt(n));
}
cubeRoot(81);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerLife(month){
    let summerMonths = ['june', 'july', 'august'];
    let notSummerMonths = ['january', 'febuary', 'march', 'april', 'may', 'september', 'october', 'november', 'december'];

    if(summerMonths.includes(month.toLowerCase())){
        alert('YAY');
    }else if(notSummerMonths.includes(month.toLowerCase())){
        alert('Boooo');
    }else{
        alert('is that even a month');
    }
}
summerLife('september');
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(n){
    for(let i = 1; i < n; i++){
        if(i % 5 !== 0){
            console.log(i);
        }
    }
}

skipFive(17);
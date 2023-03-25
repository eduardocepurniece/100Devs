//--- Easy
//create a variable and assign it a number
let x = 10;
//minus 10 from that number
x -= 10;
//print that number to the console
console.log(x);
//--- Medium
//create a variable that holds a value from the input
//add 25 to that number
//alert that number
//--- Hard
//create a variable that holds the h1
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('h1').addEventListener('click', dance);

function dance(){
    let input = parseInt(document.querySelector('#danceDanceRevolution').value);
    input += 25;
    console.log(input);
}

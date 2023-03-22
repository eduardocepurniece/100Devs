// *Variables*
// Create a variable and console log the value
let variable = 1;
console.log(variable);
// Create a variable, add 10 to it, and alert the value
variable += 10;
alert(variable);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substract4(n1, n2, n3, n4){
    alert(n1 - n2 - n3 - n4);
}
// Create a function that divides one number by another and returns the remainder
function divide(n1, n2){
    return n1 % n2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addif(n1, n2){
    let sum = n1 + n2;
    if(sum > 50){
        alert('Jumanji!')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(n1, n2, n3){
    let product = n1 * n2 * n3;
    if(product % 3 === 0) alert('ZEBRA');
}
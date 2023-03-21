// *Variables*
// Create a variable and console log the value
let variable;
console.log(variable);
// Create a variable, add 10 to it, and alert the value
variable += 10;
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substraction(num1, num2, num3, num4){
    alert(num1 - num2 - num3 - num4);
}
// Create a function that divides one number by another and returns the remainder
function divide(num1, num2){
    return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2){
    if(num1 + num2 > 50){
        alert('Jumanji')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(num1, num2, num3){
    let mult = num1 * num2* num3;
    if(mult % 3 === 0){
        alert('ZEBRA');
    }
}
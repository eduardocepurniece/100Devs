//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5,6,7];
alert(nums.reduce((acc, cur) => acc + cur, 0));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArr(arr){
    return arr.map(x => x * x);
}
console.log(squareArr(nums));
//Create a function that takes string
//Print the reverse of that string to the console
function revStr(str){
    return str.split('').reverse().join('');
}
console.log(revStr('jello'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalindrome(str){
    if( str.split('').reverse().join('') === str){
        alert('string is palindrome');
    }else{
        alert('string is not palindrome');
    }
}
checkPalindrome('cana')
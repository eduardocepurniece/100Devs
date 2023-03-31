//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5,5,6,7,78,3];
alert(nums.reduce((a,b) => a + b ,0));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArr(arr){
    return arr.map(x => x * x);
}
console.log(squareArr(nums));
//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    return str.split('').reverse().join('');
}
console.log(reverseStr('Have you ever seen a wild beast you were sure she would not bite you? Me, never! '));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalindrome(str){
    return str === str.split('').reverse().join('') ? 'String is Palindrome' : 'String is not Palindrome';
}
alert(checkPalindrome('racecar'));

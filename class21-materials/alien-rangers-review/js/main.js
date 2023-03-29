//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Friends', 'The Office', 'Trailer Park boys'];
tvShows.forEach(x => console.log(x));
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [2,3,5,7,4,1,8,3];
let evenNums = nums.filter(x => x % 2 === 0);
console.log(evenNums);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function namaste(arr){
    let sorted = arr.sort((a,b) => a - b);
    alert(sorted[2] + sorted[sorted.length - 2]);
}
namaste(nums);
//Create an array of movie titles. Loop through the array and each element to the h2.
let movies =['The fellowship of the ring', 'The two Towers', 'The return of the King'];

movies.forEach(x => document.querySelector('h2').innerHTML += x);

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1,2,3,4,5];

for(let i = 0; i < nums.length; i++){
    nums[i] += 3;
}

//Find the average of all the numbers from question three
let sum;

for(let i = 0; i < nums.length; i++){
    sum += nums[i];
}

let avrg = sum / nums.length;
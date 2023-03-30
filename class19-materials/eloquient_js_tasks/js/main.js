//The sum of a range
/*Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.*/

/*As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array*/

function range(n1, n2, step){
    let numsArray = [];
    for(let i = n1; i <= n2; i += step){
        numsArray.push(i);
    }
}

/*Next, write a sum function that takes an array of numbers and returns the sum of these numbers. */

function sum(arr){
    return arr.reduce((acc, curr) => acc + curr);
}

//Reversing an array
/*write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.*/

function resverseArr(arr){
    let reversedArr = [];
    arr.forEach(element => {
        reversedArr.unshift(element);
    });
    return reversedArr;
}
console.log(resverseArr([1,2,3,4,5]));



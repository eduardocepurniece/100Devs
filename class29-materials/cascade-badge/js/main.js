//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reversePoke(pokemons){
    return pokemons.reverse();
}
console.log(reversePoke(['bulba','char', 'squirt']));


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareStuff(a,b){
    return a.reduce((a,c) => c**2) > b.reduce((a,c) => c**3);
}
console.log(compareStuff([2,2,2],[2,2,2]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function filtering(arr){
    return arr.filter((e,i) => e % i === 0);
}
console.log(filtering([22, -6, 32, 82, 9, 25]));
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function integersSum(arr){
    return arr.reduce((a,c) => a + Number(c), 0);
}
console.log(integersSum(['1', 1, 1, 1, '1', 1]))
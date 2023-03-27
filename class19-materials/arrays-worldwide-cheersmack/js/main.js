//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function arrCreator(n){
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    return arr;
}

console.log(arrCreator(7));

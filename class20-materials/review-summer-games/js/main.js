//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiArr(arr){
    alert(arr.reduce((prod, curr) => prod * curr));
}

multiArr([2,4,5]);
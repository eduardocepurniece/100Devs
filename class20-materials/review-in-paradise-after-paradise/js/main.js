// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function storeGreet(arr){
    if(arr[1] < arr[arr.length - 1]) alert('Hi');
    else if(arr[1] > arr[arr.length - 1]) alert('Bye');
    else alert('We close in an hour');
}

storeGreet([1,2,3,4,5,7,3,2,8]);
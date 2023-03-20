//The Carousel
//----------------------------------------------------------------
/*let number = parseInt(prompt());
while(!number){
    number = parseInt(prompt());
}
for(let i = number; i <= number + 10; i++){
    alert(i);
}*/

//Input Validation
//-------------------------------------------------------------------
/*
let number = parseInt(prompt());
while(number < 50 || number > 100 || !number){
    number = parseInt(prompt());
}
*/

//FizzBuzz
//--------------------------------------------------------------------
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 ===0) console.log('Buzz');
    else console.log(i);
}
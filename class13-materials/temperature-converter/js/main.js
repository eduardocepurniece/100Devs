//Write your pseduo code first! 

document.getElementById('convert').addEventListener('click', convert);

function convert(){
//read input number
let input = parseInt(document.getElementById('celcius').value);
// convert
input = input * 5/9 + 32;
//show result
document.getElementById('result').innerText = input;
}




//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.getElementById('help').addEventListener('click', hungry);

function hungry(){
    const amountOfHelp = parseInt(document.querySelector('input').value);
    document.querySelector('#stops').innerHTML = '';
    for(let i = 0; i < amountOfHelp; i++){
        document.querySelector('#stops').innerHTML += 'Stop! '
    }
}
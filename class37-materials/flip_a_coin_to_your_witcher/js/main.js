document.querySelector('button').addEventListener('click', makeReq);

console.log('bruh')

async function makeReq(){
    const choice = document.getElementsByName('flipACoin');
    let checked = ''
    for(var radio of choice){
        if(radio.checked){
            checked = radio.value;
        }
    }
    const res = await fetch(`/api?userChoice=${checked}`);
    const data = await res.json();
    
    document.querySelector('h2').innerHTML = 'Player ' + data.player;
}
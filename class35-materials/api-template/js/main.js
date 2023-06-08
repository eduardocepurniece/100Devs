//Make an api request using async await
async function getACuteDogPhoto(){
    const pic = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await pic.json();
    document.querySelector('img').src = data.message;
}


/*async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
}*/
getACuteDogPhoto()
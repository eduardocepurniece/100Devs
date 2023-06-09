//Make an api request using async await
document.querySelector('button').addEventListener('click', getThatDog);

async function getThatDog(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    console.log(data);
    document.querySelector('img').src = data.message;
}

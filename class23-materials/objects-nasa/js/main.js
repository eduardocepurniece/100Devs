//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicture);

function getPicture(){
    const inputDate = document.querySelector('input').value;

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + inputDate)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.hdurl;
      document.querySelector('p').innerText = data.explanation;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


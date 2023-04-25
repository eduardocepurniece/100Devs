//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('h2').innerHTML = data.title;
        document.querySelector('img').src = data.hdurl;
        document.querySelector('h3').innerHTML = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
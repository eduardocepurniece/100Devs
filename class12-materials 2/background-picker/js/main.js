document.getElementById('first').onclick = partyPurple
document.getElementById('second').onclick = partyGreen
document.getElementById('third').onclick = partyBlue
document.getElementById('fourth').onclick = partyYellow


function partyPurple() {
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').classList.add("firstBg");
  document.querySelector('body').classList.remove("secondBg");
  document.querySelector('body').classList.remove("thirdBg");
  document.querySelector('body').classList.remove("fourthBg");
}

function partyGreen() {
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').classList.add("secondBg");
  document.querySelector('body').classList.remove("firstBg");
  document.querySelector('body').classList.remove("thirdBg");
  document.querySelector('body').classList.remove("fourthBg");
}

function partyBlue() {
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').classList.add("thirdBg");
  document.querySelector('body').classList.remove("secondBg");
  document.querySelector('body').classList.remove("firstBg");
  document.querySelector('body').classList.remove("fourthBg");
}

function partyYellow() {
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').classList.add("fourthBg");
  document.querySelector('body').classList.remove("secondBg");
  document.querySelector('body').classList.remove("thirdBg");
  document.querySelector('body').classList.remove("firstBg");
}

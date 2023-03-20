let total = 0;

document.getElementById('pumpkin').addEventListener('click', resetToZero);
document.getElementById('dominosPizza').addEventListener('click',addThree);
document.getElementById('zebra').addEventListener('click', addNine);
document.getElementById('cantThinkOfAnything').addEventListener('click', withdrawTwo);

function resetToZero(){
  total = 0;
  document.querySelector('#placeToPutResult').innerText = total;
}

function addThree(){
  total += 3;
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function addNine(){
  total += 9;
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function withdrawTwo(){
  total -= 2;
  document.querySelector('#placeToPutResult').innerHTML = total;
}
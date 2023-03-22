document.querySelector('#yell').addEventListener('click', yell);

function yell(){
  const fName = document.querySelector('#firstName').value;
  const fMiddle = document.querySelector('#firstMiddle').value;
  const lMiddle = document.querySelector('#lastMiddle').value;
  const lName = document.querySelector('#lastName').value;

  document.querySelector('#placeToYell').innerHTML = `${fName} ${fMiddle} ${lMiddle} ${lName}`;
}
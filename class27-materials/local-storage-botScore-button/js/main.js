//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector('#addScore').addEventListener('click',addOne);
document.querySelector('#resetScore').addEventListener('click',reset);

let scoreCount = 0;

function addOne(){
    scoreCount += 1;
    setScore(scoreCount);
}
function reset(){
    scoreCount = 0;
    setScore(scoreCount);
}
function setScore(scoreToSet){
    localStorage.setItem('score', scoreToSet);
    document.querySelector('p').innerHTML = scoreToSet;
}

if(localStorage.getItem('score')){
    scoreCount = Number(localStorage.getItem('score'));
}
document.querySelector('p').innerHTML = scoreCount;


const claire = document.querySelector('#claire');
const andi = document.querySelector('#andi');
const sharleen = document.querySelector('#sharleen');

document.querySelector('#claireNext').addEventListener('click', showClaire);
document.querySelector('#andiNext').addEventListener('click', showAndi);
document.querySelector('#sharleenNext').addEventListener('click', showSharleen);

function showClaire(){
	claire.classList.toggle('hidden');
	andi.classList.add('hidden');
	sharleen.classList.add('hidden');
}

function showAndi(){
	andi.classList.toggle('hidden');
	claire.classList.add('hidden');
	sharleen.classList.add('hidden');
}

function showSharleen(){
	sharleen.classList.toggle('hidden');
	claire.classList.add('hidden');
	andi.classList.add('hidden');
}
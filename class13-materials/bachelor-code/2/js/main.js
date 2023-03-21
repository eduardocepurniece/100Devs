const andi = document.getElementById('andi');
const claire = document.getElementById('claire');
const sharleenNext = document.getElementById('sharleen');

document.getElementById('andiNext').addEventListener('click', showAndi);
document.getElementById('claireNext').addEventListener('click', showClaire);
document.getElementById('sharleenNext').addEventListener('click', showSharleen);

function showAndi(){
	andi.classList.toggle('hidden');
	claire.classList.add('hidden');
	sharleen.classList.add('hidden');
}

function showClaire(){
	claire.classList.toggle('hidden');
	andi.classList.add('hidden');
	sharleen.classList.add('hidden');
}

function showSharleen(){
	sharleen.classList.toggle('hidden');
	claire.classList.add('hidden');
	andi.classList.add('hidden');
}

//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function CreateCharacter(name, job, nativeSkill, pet){
    this.name = name;
    this.job = job;
    this.nativeSkill = nativeSkill;
    this.pet = pet;

    this.attack = function(){
        console.log('Slash');
    }
    this.move = function(){
        console.log('moving');
    }
    this.jump = function(){
        console.log('jumping');
    }
}
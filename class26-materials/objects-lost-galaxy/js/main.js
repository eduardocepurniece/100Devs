//Create a dog object that has four properties and three methods
class Doggies{
    constructor(name, breed, size, age){
        this.name = name;
        this.breed = breed;
        this. size = size;
        this.age = age;
    }
    bark(){
        console.log('Wouf! Wouf!');
    }
    poo(){
        console.log('enggghghhghgh');
    }
    markTerritory(){
        console.log('Psssssss...');
    }
}

let apuh = new Doggies('Apuh', 'Schnaicher', 'medium', '14');
//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    speak(){
        console.log(`${this.name} makes some kind of noice`);
    }
}

class Domesticated extends Animal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
}

class Cat extends Domesticated{
    constructor(name, breed){
        super(name,breed);
    }
    speak(){
        console.log(`${this.name} meaws`);
    }
}

class Dog extends Domesticated{
    constructor(name, breed){
        super(name,breed);
    }
    speak(){
        console.log(`${this.name} barks`);
    }
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')

let farm = [simba,machi,salem]

for( a of farm ){
    a.speak()
}
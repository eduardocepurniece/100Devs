//Create a constructor with 4 properties and 3 methods
class MakeDish{
    constructor(name, ingredients, instructions, prepTime){
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.prepTime = prepTime;
    }
    broil(){
        console.log('fush! fash!');
    }
    stir(){
        console.log('bromgds bramgs brorbso');
    }
    fry(){
        console.log('Tzzzzsssssss...');
    }
}

let carpaccio = new MakeDish('Carpaccio', ['meat', 'salt', 'blackPepper'], 'Season the meat with salt and blackPepper and then mince the meat until it forms a thin paste', 15);
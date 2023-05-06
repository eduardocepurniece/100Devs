//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

class MakePokemon{
    constructor(name,type, gender,catchRate,BaseFriendship, baseExp, growthRate, baseHp, baseAttack, baseDefense, baseSpAttack, baseSpDef, Speed, move1, move2, move3, move4){
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.catchRate = catchRate;
        this.BaseFriendship = BaseFriendship;
        this.baseExp = baseExp;
        this.growthRate = growthRate;
        this.baseHp = baseHp;
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
        this.baseSpAttack = baseSpAttack;
        this.baseSpDef = baseSpDef;
        this.Speed = Speed;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
    }
    useMove1(){
        console.log(`${this.name} Use ${this.move1}!`)
    }
    useMove2(){
        console.log(`${this.name} Use ${this.move2}!`)
    }
    useMove3(){
        console.log(`${this.name} Use ${this.move3}!`)
    }
    useMove4(){
        console.log(`${this.name} Use ${this.move4}!`)
    }
    comeback(){
        console.log(`Comeback ${this.name}`);
    }
}
let bulbasor = new MakePokemon('Bulbasaur',['grass','poison'], 'male', 45, 50, 64, 'medium slow', 45, 49, 49, 65, 65, 45, 'razor leaf', 'sleep powder', 'take down', 'solar beam');
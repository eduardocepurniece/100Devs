//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class ExpressoMaker{
    constructor(brand, model, price, rating){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.rating = rating;
    }
    turnOn(){
        console.log('Im turned On');
    }
    turnOff(){
        console.log('Im turned Off');
    }
    brew(){
        console.log('Im brewing');
    }
}
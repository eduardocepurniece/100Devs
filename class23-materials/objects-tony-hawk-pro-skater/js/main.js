//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkCharacterCreator(name, stance, boardType, catchprase){
    this.name = name;
    this.stance = stance;
    this.boardType = boardType;
    this.catchprase = catchprase;

    this.taunt = function(){
        console.log('He He He He ' + catchprase);
    }
    this.trick = function(){
        console.log('Performing 360 backslash demon flip');
    }
    this.skate = function(){
        console.log('Performing normal skating');
    }
}
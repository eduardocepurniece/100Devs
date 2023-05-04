//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShowsMaker{
    constructor(title, category, rating, episodes){
        this.title = title;
        this.category = category;
        this.rating = rating;
        this.episodes = episodes;
    }
    play(){
        console.log('playing');
    }
    stop(){
        console.log('stopped');
    }
    pause(){
        console.log('paused');
    }
}

let shadowhunters = new NetflixShowsMaker('Shadowhunters', ['Teen', 'Paranormal', 'action'], 4.3, 18);
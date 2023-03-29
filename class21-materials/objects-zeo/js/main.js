//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    color : 'black',
    shape : 'round',
    brand : 'MAKO',
    rope : true,
    currentMinutes: 5,
    currentSeconds: 26,
    currentMiliSeconds: 13,

    resetTime : function (){
        this.currentMiliSeconds = 0;
        this.currentMinutes = 0;
        this.currentSeconds = 0;
    },

    start : function (){
        console.log('time starta');
    },

    stop : function (){
        console.log('time stoptaaa');
    },

    changeMode : function (){
        console.log('changed mode! HIIIAAAAAJ!')
    },
}
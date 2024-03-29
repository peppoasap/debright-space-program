var moment = require('moment');

class TimeManager{

    /**
     * @param {Date} time
     * @param {Number} speed 
     */

    constructor(speed){
        this.time = moment();
        this.speed = speed;
    }

    set(speed){
        this.speed = speed;
    }

    //When you call this function add speed in minutes to actual time.
    update(){
        this.time.add(this.speed, "seconds");
        
    }

}

export default TimeManager;
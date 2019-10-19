import Debris from '../gameplay/Debris';

var satellite = require('satellite.js');

class DebrisManager{

    constructor(time_manager, data_json){
        this.time_manager = time_manager;
        this.data = data_json;
        this.my_position;
        navigator.geolocation.getCurrentPosition(handler);
        function handler(position){
            this.my_position = position;
        }

        this.sea_debrises = [];
        this.leo_debrises = [];
        this.meo_debrises = [];
        this.heo_debrises = [];
    }

    updateDebrises(){
        for(var i = 0; i < this.data.length; i++){
            var debris = new Debris(this.time_manager, this.my_position, this.data[i]);

            if(debris.height > 35000){
                this.heo_debrises.push(debris);
            }else if(debris.height > 2000){
                this.meo_debrises.push(debris);
            }else if(debris.height > 0){
                this.leo_debrises.push(debris);
            }else if(debris.height <= 0){
                this.sea_debrises.push(debris);
            }
        }

    }



}

export default DebrisManager;
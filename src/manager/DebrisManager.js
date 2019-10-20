import Debris from '../gameplay/Debris';

class DebrisManager{

    constructor(my_position, time_manager, data_json, orbits_bands){
        this.my_position = my_position;
        this.time_manager = time_manager;
        this.data = data_json;
        this.orbits_bands = orbits_bands;
        this.sea_debrises = [];
        this.leo_debrises = [];
        this.meo_debrises = [];
        this.heo_debrises = [];
        this.createDebrises();
    }

    createDebrises(){
        for(var i = 0; i < this.data.length; i++){
            var debris = new Debris(this.my_position, this.time_manager, this.data[i]);

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

    updateDebrises(){
        switch(this.orbits_bands.state){
            case 0:
                for(var i = 0; i < 4; i++){
                    this.sea_debrises[i] = new Debris(this.my_position, this.time_manager, this.data[i]);
                }
                break;
            case 1:
                for(var i = 0; i < 4; i++){
                    this.leo_debrises[i] = new Debris(this.my_position, this.time_manager, this.data[i]);
                }
                break;
            case 2:
                for(var i = 0; i < 4; i++){
                    this.meo_debrises[i] = new Debris(this.my_position, this.time_manager, this.data[i]);
                }
                break;
            case 3:
                for(var i = 0; i < 4; i++){
                    this.heo_debrises[i] = new Debris(this.my_position, this.time_manager, this.data[i]);
                }
                break;  
        }

    }





}

export default DebrisManager;
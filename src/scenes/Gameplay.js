import TimeManager from '../manager/TimeManager';
import DebrisManager from '../manager/DebrisManager';
import OrbitsBands from '../gameplay/OrbitsBands';
import ResourcesManager from '../manager/ResourcesManager';

var MY_POSITION;
navigator.geolocation.getCurrentPosition(handler);
        function handler(position){
            MY_POSITION = position;
        }
var VIEW = 4;
class Gameplay extends Phaser.Scene{
    constructor() {
        super("Gameplay");
        this.time_manager = new TimeManager(0.15);
        this.debris_manager;
        this.orbits_bands = new OrbitsBands();
        this.debris_array = [];
        this.orbits_array = [];
        this.dateText;
        this.resources_manager = new ResourcesManager();
        this.resources_manager.update_money(100000);
    }

    preload(){
        this.load.image("background", './src/assets/backgrounds/world-map.png');
        this.load.image("background-night-layer", './src/assets/backgrounds/night-map.png');
        this.load.image("background-air-layer", './src/assets/backgrounds/cloud-map.png');
        this.load.image("money-gui", './src/assets/gui/money-gui.png');
        this.load.image("research-button", './src/assets/gui/research-button.png');
        this.load.image("mission-button", './src/assets/gui/mission-button.png');
        this.load.image("leaderboard-button", './src/assets/gui/leaderboard-button.png');

        this.load.json("debris_json", './orbit_data/debrisTLE_ultra.json');

        this.load.image("debris_image", './src/assets/debris.png');

    }

    create(){
        
        // This is the world-map
        this.background = this.add.image(0,0, "background").setOrigin(0,0);
        // This is the transparent clouds map applied upon the world-map
        this.background_layer_air = this.add.image(0, 320, "background-air-layer");
        // This is the darkness (muahahaha...)
        this.background_layer_night = this.add.image(0, 0,"background-night-layer");
        this.background_layer_night.setOrigin(0,0);
        this.add.image(16, 16, "money-gui").setOrigin(0,0);
        this.add.image(16, 84, "leaderboard-button").setOrigin(0,0).setScale(0.6);
        this.add.image(16, 624, "research-button").setOrigin(0,1).setScale(0.6);
        this.add.image(1264, 624, "mission-button").setOrigin(1,1).setScale(0.6);
        this.dateText = this.add.text(1054, 16, "date").setFontFamily("Courier").setFontSize(16).setColor('#ffffff');
        this.add.text(116, 32, this.resources_manager.money + " $").setFontFamily("Courier").setFontSize(18).setColor('#ffffff');
        //Functional Layer
        this.debris_manager = new DebrisManager(MY_POSITION, this.time_manager, this.cache.json.get("debris_json"), this.orbits_bands);
        this.orbits_bands.setBands(1);
        for(var i = 0; i < VIEW; i++){
            this.debris_array.push(this.add.circle(-100,-100, 4, 0xffffff).setScale(2));
        }
    }

    update(time, delta){
        this.time_manager.update();
        this.dateText.setText(this.time_manager.time.format("DD/MM/YYYY - HH:mm.ss"));

        this.debris_manager.updateDebrises();
        if(this.orbits_array.length > 1220*2){
            for(var i = 0; i < VIEW*2; i++){
                this.orbits_array.pop().destroy();
            }
        }
        switch(this.orbits_bands.state){
            case 0:
                for(var i = 0; i < this.debris_manager.sea_debrises.length; i++){
                    var longitude = this.debris_manager.sea_debrises[i].longitude_pixel;
                    var latitude = this.debris_manager.sea_debrises[i].latitude_pixel;
                    //this.add.image(longitude, latitude, "debris_image");
                }
                break;
            case 1:
                for(var i = 0; i < VIEW; i++){
                    var longitude = this.debris_manager.leo_debrises[i].longitude_pixel;
                    var latitude = this.debris_manager.leo_debrises[i].latitude_pixel;
                    this.orbits_array.unshift(this.add.graphics({fillStyle: { color: 0xff0000, alpha: 0.3}}).fillPoint(longitude, latitude, 2));
                    this.debris_array[i].setPosition(longitude, latitude);
                }
                break;
            case 2:
                for(var i = 0; i < this.debris_manager.meo_debrises.length; i++){
                    
                }
                break;
            case 3:
                for(var i = 0; i < this.debris_manager.heo_debrises.length; i++){
                    
                }
                break;  
        }

        /* [BACKGROUND] */
        // Changing this value will affect the animation velocity
        let speed_air = 0.024;
        let speed_earth = 0.024;

        // If it didn't reach the end point
        if(this.background_layer_air.x < 1280){
            // Moving airish (air-ish, do u get the joke?) background
            this.background_layer_air.x += speed_air * delta;
        }else{
            // Otherwise we reset its starting point
            this.background_layer_air.x = 0;
        }
        /****/

    }


}

export default Gameplay;
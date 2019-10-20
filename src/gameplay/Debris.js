var satellite = require('satellite.js');
class Debris {

    /**
     * 
     * @param {object} data 
     */

    constructor(my_position, time_manager, data){
        this.my_position = my_position;
        this.time_manager = time_manager;
        this.name = data["OBJECT_NAME"];
        this.tle1 = data["TLE_LINE1"];
        this.tle2 = data["TLE_LINE2"];
        this.velocity = 0;
        this.dimension;
        this.height;
        this.longitude_pixel;
        this.latitude_pixel;
        this.setDebrisData();
    }

    /*******SATELLITE JS PART*******************/
    /*Take TLE Lines and apply SGP4 Model*/     
    setDebrisData(){
        var satrec = satellite.twoline2satrec(this.tle1, this.tle2);
        var positionAndVelocity = satellite.propagate(satrec, this.time_manager.time.toDate());

        // The position_velocity result is a key-value pair of ECI coordinates.
        // These are the base results from which all other coordinates are derived.
        var positionEci = positionAndVelocity.position,
            velocityEci = positionAndVelocity.velocity;
            this.velocity = velocityEci;
                
        // Set the Observer at pc current position in RADIANS
        var observerGd = {
            longitude: satellite.degreesToRadians(this.my_position.coords.longitude),
            latitude: satellite.degreesToRadians(this.my_position.coords.latitude),
            height: 0.370
        };

        // You will need GMST for some of the coordinate transforms.
        // http://en.wikipedia.org/wiki/Sidereal_time#Definition
        var gmst = satellite.gstime(this.time_manager.time.toDate());

        // You can get ECF, Geodetic, Look Angles, and Doppler Factor.
        var positionEcf   = satellite.eciToEcf(positionEci, gmst),
            velocityEcf = satellite.eciToEcf(velocityEci, gmst),
            observerEcf   = satellite.geodeticToEcf(observerGd),
            positionGd    = satellite.eciToGeodetic(positionEci, gmst),
            lookAngles    = satellite.ecfToLookAngles(observerGd, positionEcf),
            doppler = satellite.dopplerFactor(observerEcf, positionEcf, velocityEcf);

        // The coordinates are all stored in key-value pairs.
        // ECI and ECF are accessed by `x`, `y`, `z` properties.
        var satelliteX = positionEci.x,
            satelliteY = positionEci.y,
            satelliteZ = positionEci.z;
        
        // Look Angles may be accessed by `azimuth`, `elevation`, `range_sat` properties.
        var azimuth   = lookAngles.azimuth,
            elevation = lookAngles.elevation,
            rangeSat  = lookAngles.rangeSat;

        // Geodetic coords are accessed via `longitude`, `latitude`, `height`.
        var longitude = positionGd.longitude,
            latitude  = positionGd.latitude,
            height    = positionGd.height;
            this.height = height;
            
        //  Convert cordinates RADIANS to DEGREES.
        var longitudeStr = satellite.degreesLong(longitude),
            latitudeStr  = satellite.degreesLat(latitude);
        
        //Convert DEGREES to PIXEL POSITION for printing on map.
            this.longitude_pixel = this.degToPx(longitudeStr, 0),
            this.latitude_pixel = this.degToPx(latitudeStr, 1);
      }
      /**********************************************************/

      /*Mapping function to convert DEGREES TO PIXEL POSITION on screen*/
    degToPx(number, l){
        var in_min, in_max, out_min, out_max;
        Number.prototype.map = function (in_min, in_max, out_min, out_max) {
            return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
          }

        //l == 0 is Longitude | l == 1 is Latitude
        if(number <= 0 && l == 0){
            in_min = -180;
            in_max = 0;
            out_min = 0;
            out_max = 640;
        }else if(number >= 0 && l == 0){
            in_min = 0;
            in_max = 180;
            out_min = 640;
            out_max = 1280;
        }else if(number <= 0 && l == 1){
            in_min = -90;
            in_max = 0;
            out_min = 0;
            out_max = 320;
        }else if(number >= 0 && l == 1){
            in_min = 0;
            in_max = 90;
            out_min = 320;
            out_max = 640;
        }
        
        return Number(number).map(in_min, in_max, out_min, out_max);
    }
    /***************************************************************/

}

export default Debris;
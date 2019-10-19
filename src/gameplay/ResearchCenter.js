import Transport from 'Transport';
import ResourcesManager from '../manager/ResourcesManager';

class ResearchCenter {

    constructor(resources_manager) {
        this.transports = [
            new Transport("../assets/transports/car.png", "Car", "This is an incredible car that do stuff", 1, 100)
        ];
        this.resources_manager = resources_manager;
    }

    /**
     * 
     * @param {int} i Index of the transport that player want to buy
     */
    buy(i) {
        var transport = this.transports[i];
        if (this.resources_manager.buy(transport.cost)) { // successful transport purchase
            this.transports[i].unlock();
            return true;
        }
        return false;
    }
}

export default ResearchCenter;
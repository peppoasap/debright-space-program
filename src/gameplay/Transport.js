class Transport {

    /**
     * 
     * @param {string} image_path The path of the asset for this transport
     * @param {string} name Name of the transport
     * @param {string} description A description of the transport
     * @param {float} altitude Altitude level that this transport can reach
     * @param {float} debris_size Max debris size that this transport can take
     * @param {int} cost Cost of the transport
     */
    constructor(image_path, name, description, altitude, debris_size, cost) {
        this.image = image_path;
        this.name = name;
        this.description = description;
        this.altitude = altitude;
        this.debris_size = debris_size;
        this.cost = cost;
        this.unlocked = false;  // is this transport unlocked by the player?
    }

    /**
     * To check if this transport is unlocked by the player
     */
    is_unlocked() {
        return this.unlocked;
    }

    unlock() {
        this.unlocked = true;
    }
}
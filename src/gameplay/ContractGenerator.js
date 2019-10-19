import Contract from 'Contract'

class ContractGenerator {

    /**
     * 
     * @param {DebrisManager} debris_manager Istance of DebrisManager. Use this to get the speed of debris 
     */
    constructor(debris_manager) {
        this.debris_manager = debris_manager;
    }

    create_contract() {
        var mission = "Destroy one debris";
    }

    /**
     * Calculates the success rate of the mission
     */
    calculate_difficulty() {
        return Phaser.Math.RND.between(1, 100);
    }

    /**
     * Calculates the amount of money you can get completing the mission
     */
}
import Contract from 'Contract';

class ContractGenerator {

    /**
     * Use ContractGenerator to generate new contracts
     * @param {DebrisManager} debris_manager Istance of DebrisManager. Use this to get the speed of debris 
     */
    constructor(debris_manager) {
        this.debris_manager = debris_manager;
        this.MONEY_MULTIPLIER = 10;
    }

    /**
     * Creates a new contract
     */
    create_contract() {
        var mission = "Destroy one debris";
        var success_rate = this.get_successrate();
        var reward = this.get_reward(success_rate);
        var expiration = null;  // TODO not implemented yet
        return new Contract(mission, reward, success_rate, expiration);
    }

    /**
     * Calculates the success rate of the mission
     */
    get_successrate() {
        return Phaser.Math.RND.between(1, 100);
    }

    /**
     * Calculates the money you can get completing the mission
     * @param {int} success_rate Success rate of the mission
     */
    get_reward(success_rate) {
        return success_rate * this.MONEY_MULTIPLIER;
    }
}

export default ContractGenerator;
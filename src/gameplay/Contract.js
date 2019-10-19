class Contract {

    /**
     * 
     * @param {string} mission Decription of mission
     * @param {int} reward Money reward you get of you complete mission
     * @param {int} success_rate Success rate of the mission
     * @param {date} expiration Expiration date of mission
     */
    constructor(mission, reward, success_rate, expiration) {
        this.mission = mission;
        this.reward = reward;
        this.success_rate = success_rate;
        this.expiration = expiration;
    }
}

export default Contract;
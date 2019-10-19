class ResourcesManager {

    constructor() {
        this.money = 0;
        this.reputation = 20; // from 0 to 100
    }

    update_money(n) {
        this.money += n;
    }

    update_reputation(n) {
        this.reputation += n;
    }

    pay(n) {
        // check if the player have enough money to pay an item in-game that cost n
        if (this.money >= n) {
            this.update_money(-n)
            return true;
        }
        return false;
    }
}

export default ResourcesManager;
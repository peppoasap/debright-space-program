import Contract from '../gameplay/Contract';
import ContractGenerator from '../gameplay/ContractGenerator';
import ResearchCenter from '../gameplay/ResearchCenter';
import ResourcesManager from '../manager/ResourcesManager';

class GameplayManager {

    constructor() {
        // use to generate a new contract
        this.contract_generator = new ContractGenerator(NONE); // @todo pass a DebrisManager as argument
        // use to manage game resources (money and reputation)
        this.resources_manager = new ResourcesManager();
        // use this to look up and buy new transports
        this.research_manager = new ResearchCenter(this.resources_manager);
        // actual contract
        this.contract = NONE;
    }

}

export default GameplayManager;
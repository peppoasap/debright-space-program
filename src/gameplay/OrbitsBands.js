class OrbitsBands{

    constructor(){
        this.states = ["sea","leo","meo","heo"];
        this.state = 0;
    }

    setBands(level){
        if(level >= 0 && level < 5){
            this.state = level;
        }
    }

}

export default OrbitsBands;
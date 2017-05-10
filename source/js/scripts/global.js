let global;

class Global {
    constructor() {
        console.log('App Initialised');
    }

    static init() {
        if (!global) {
            global = new Global();
        }
        return global;
    }

}

export default Global;
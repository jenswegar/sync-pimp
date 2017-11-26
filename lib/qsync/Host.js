
class Host {

    get id() { return this._id; }
    set id(value) { this._id = value; }

    get enabled() { return this._enabled; }
    set enabled(value) { this._enabled = value; }
    
    get inetAddr() { return this._inetAddr; }
    set inetAddr(value) { this._inetAddr = value; }

    get port() { return this._port; }
    set port(value) { this._port = value; }
    
    constructor(params){
        Object.assign(this, params);
    }

    toJSON(){
        return {
            id: this.id,
            enabled: this.enabled,
            inetAddr: this._inetAddr,
            port: this.port
        }
    }
}

module.exports = Host;
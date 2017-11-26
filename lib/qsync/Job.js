
class Job {

    
    get id() { return this._id; }
    set id(value) { this._id = value; }

    get name() { return this._name; }
    set name(value) { this._name = value; }

    get server() { return this._server; }
    set server(value) { this._server = value; }

    get port() { return this._port; }
    set port(value) { this._port = value; }

    get folderPairs() { return this._folderPairs; }
    set folderPairs(value) { this._folderPairs = value; }

    
    constructor(params) {
    }
}

module.exports = Job;

let repositories = null;
const login = require('./login')(repositories);
const registrate = require('./registrate')(repositories);

module.exports = (rep) => {

    repositories = rep;

    return {
        login,
        registrate
    }

}
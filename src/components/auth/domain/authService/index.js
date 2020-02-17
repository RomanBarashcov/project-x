module.exports = (rep) => {

    return {
        login: require('./login')(rep),
        registrate: require('./registrate')(rep)
    }

}
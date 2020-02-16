const jwtConfig = require('../config/jwtConfig');
const jwt = require('jsonwebtoken');

const generate = (userId, email) => {


    const accessToken = jwt.sign({ id: userId ,email: email}, jwtConfig.accessSecret, {
        expiresIn: accessTokenExpiresIn,
    });

    return {
        accessToken,
        accessTokenExpiresIn
    }

};

module.exports = {
    generate
};
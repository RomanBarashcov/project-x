
const jwt = require('jsonwebtoken');


const generate = (userId, email) => {

    let jwtConfig = require('../../../components/auth/config/jwtConfig');

    const accessToken = jwt.sign({ id: userId ,email: email }, jwtConfig.accessSecret, {
        expiresIn: 36000,
    });

    return {
        accessToken,
        accessTokenExpiresIn: 36000
    }

};

module.exports = {
    generate
};
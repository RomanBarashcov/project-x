
const tokenGenerator = require('../../../../core/utils/generators').tokenGenerator;
const errors = require('../../../../core/constants/errors/serviceLayer')

let repositories = null;

const execute = async (user) => {
    try {

        user = await repositories.userRepository.getById(user.id);
        if(!user) throw errors.AUTH.INCORRECT_USER_ID;

        const data = tokenGenerator.generate(user.id, user.userName);

        delete user.salt;
        delete user.password;

        return {
            user: user, 
            accessToken: data.accessToken,
            accessTokenExpiresIn: data.accessTokenExpiresIn
        };

    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = (rep) => {

    repositories = rep;

    return {
        execute
    }
}
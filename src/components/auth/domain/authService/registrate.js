
const errors = require('../../../../core/constants/errors/serviceLayer')

let repositories = null;

const execute = async (user) => {
    try {

        user = await repositories.userRepository.createUser(user);
        if(!user) throw errors.AUTH.INCORRECT_USER_DATA;

        const profileResult = await repositories.userRepository.createProfile(user.id);
        if(!profileResult) throw errors.AUTH.INCORRECT_USER_DATA;

        return user;

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
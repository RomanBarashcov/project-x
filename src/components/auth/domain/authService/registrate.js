
const errors = require('../../../../core/constants/errors/serviceLayer')
const defaultRoles = require('../../../../core/constants/data/defaultRoles');
let repositories = null;

const execute = async (user) => {
    try {

        let role = await repositories.userRepository.getRoleByType(defaultRoles.USER);
        user.roleId = role.id;

        let newUser = await repositories.userRepository.createUser(user);
        if(!newUser) throw errors.AUTH.INCORRECT_USER_DATA;

        const profileResult = await repositories.userRepository.createProfile(newUser.id);
        if(!profileResult) throw errors.AUTH.INCORRECT_USER_DATA;

        const creds = await repositories.userRepository.createUserCreds(newUser.id, user.hashedPassword);
        if(!creds) throw errors.AUTH.INCORRECT_USER_DATA;

        return newUser;

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
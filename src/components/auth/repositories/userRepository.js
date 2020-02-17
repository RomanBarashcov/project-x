
let DAL = null;

const getById = async (id) => {
    try {

        return await DAL.userDAL.getById(id);

    } catch (err) {
        console.error(err);
        throw err;
    }
}

const getByEmail = async (email) => {
    try {

        return await DAL.userDAL.getByEmail(email);

    } catch (err) {
        console.error(err);
        throw err;
    }
}

const getRoleByType = async (roleType) => {
    try {

        return await DAL.roleDAL.getRoleByType(roleType);

    } catch (err) {
        console.error(err);
        throw err;
    }
}

const createUser = async (user) => {
    try {

        return await DAL.userDAL.createUser(user);

    } catch (err) {
        console.error(err);
        throw err;
    }
}

const createProfile = async (userId, firstName, lastName) => {
    try {

        return await DAL.userDAL.createProfile(userId, firstName, lastName);

    } catch (err) {
        console.error(err);
        throw err;
    }
}

const createUserCreds = async (userId, password) => {
    try {

        return await DAL.userDAL.createUserCreds(userId, password);

    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = (dal) => {

    DAL = dal;

    return {
        getById,
        getByEmail,
        getRoleByType,
        createUser,
        createProfile,
        createUserCreds
    }
};
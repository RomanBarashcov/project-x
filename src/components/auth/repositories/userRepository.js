
let dal = null;

const getByEmail = async (email) => await dal.userDAL.getByEmail(email);

const createUser = async (user) => await dal.userDAL.createUser(user);

const createProfile = async (userId, firstName, lastName) => await dal.userDAL.createProfile(userId, firstName, lastName);

module.exports = (dal) => {

    dal = dal;

    return {
        getByEmail,
        createUser,
        createProfile
    }
};
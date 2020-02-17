
const db = require("../../boot/models/index").sequelize;

const getById = async (id) => {
    try {
               
        const user = await db.query(`SELECT u.*, uc."password", p."firstName", p."lastName" FROM "Users" AS u
                                        LEFT JOIN "UserCredentials" AS uc ON u.id = uc."userId"
                                        LEFT JOIN "Profiles" AS p ON u.id = p."userId"
                                    WHERE u.id = :userId`,
        { replacements: { userId: id }, type: db.QueryTypes.SELECT });
        
        return user[0];

    } catch (err) {
        console.error(err);
    }
};

const getByEmail = async (email) => {
    try {

        let user = await db.query(`SELECT u.*, uc."password", p."firstName", p."lastName" FROM "Users" AS u
                                    LEFT JOIN "UserCredentials" AS uc ON u.id = uc."userId"
                                    LEFT JOIN "Profiles" AS p ON u.id = p."userId"
                                    WHERE u."userName" = :email`,
        { replacements: { email: email }, type: db.QueryTypes.SELECT });

        return user[0];

    } catch (err) {
        console.error(err);
    }
};

const createUser = async (user) => {
    try {

        user = await db.models.User.create({
            userName: user.userName,
            roleId: user.roleId
        });

        return user;

    } catch (err) {
        console.error(err);
    }
};

const createProfile = async (userId, firstName, lastName) => {
    try {

        let result = await db.models.Profile.create({
            userId: userId,
            firstName: firstName,
            lastName: lastName
        });

        return result;

    } catch (err) {
        console.error(err);
    }
};

const createUserCreds = async (userId, password) => {
    try {

        let creds = await db.models.UserCredential.create({
            userId: userId,
            password: password
        });

        return creds;

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getById,
    getByEmail,
    createUser,
    createProfile,
    createUserCreds
}
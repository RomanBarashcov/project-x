
const db = require("../../boot/models/index").sequelize;

const getRoleByType = async (type) => {
    try {
               
        const role = await db.query(`SELECT r.* FROM "Roles" AS r WHERE r."type" = :type`,
        { replacements: { type: type }, type: db.QueryTypes.SELECT });
  
        return role[0];

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getRoleByType
}
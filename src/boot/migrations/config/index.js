const config = require('../../config');

module.exports = {
    [config.env]: {
        username: config.database.username,
        password: config.database.password,
        database: config.database.database,
        host: config.database.host,
        dialect: config.database.dialect,
        timestamps: config.database.timestamps,
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeSeederMeta"
    }
};
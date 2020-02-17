
module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Roles', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      type: {
        allowNull: false,
        type: Sequelize.INTEGER
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roles');
  }

};
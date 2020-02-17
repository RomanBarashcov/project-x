
module.exports = {
  
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Users', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userName: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },

      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        validate: {
          notEmpty: true
        },

        references: {
          model: 'Roles',
          key: 'id',
        }
      },

    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
  
};
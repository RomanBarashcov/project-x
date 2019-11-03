
module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('UserCredentials', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
  
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        validate: {
          notEmpty: true
        },
  
        references: {
          model: 'Users',
          key: 'id',
        }
      },
  
      password: {
        allowNull: false,
        type: Sequelize.STRING
      }

    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserCredentials');
  }
  
};
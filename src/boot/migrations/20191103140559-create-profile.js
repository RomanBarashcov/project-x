
module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Profiles', {

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

      firstName: {
        type: Sequelize.STRING
      },

      lastName: {
        type: Sequelize.STRING
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
  
};
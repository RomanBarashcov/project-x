module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', [{
  
        type: 1, // Admin
  
      }, {
  
        type: 2 // MODERATOR
  
      }, {
  
        type: 3 // User
  
      }], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
    }
  };
  
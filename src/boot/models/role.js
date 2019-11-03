
module.exports = (sequelize, DataTypes) => {

  const Role = sequelize.define('Role', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    type: {
      type: DataTypes.STRING
    }
    
  }, { timestamps: false });

  return Role;
  
};
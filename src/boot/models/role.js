
module.exports = (sequelize, DataTypes) => {

  const Role = sequelize.define('Role', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    type: {
      type: DataTypes.INTEGER
    }
    
  }, { timestamps: false });

  return Role;
  
};
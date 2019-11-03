
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    userName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },

    roleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      validate: {
        notEmpty: true
      },

      references: {
        model: 'Roles',
        key: 'id',
      }
    }

  }, {
    timestamps: false
});

  return User;
};
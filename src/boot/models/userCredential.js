module.exports = (sequelize, DataTypes) => {

  const UserCredential = sequelize.define('UserCredential', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING
    }

  }, {
    timestamps: false
});

  return UserCredential;

};
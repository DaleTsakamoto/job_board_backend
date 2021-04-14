'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      unique: true
    },
    bio: DataTypes.STRING,
    resume: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.JobsApplied, { foreignKey: 'userId' })
    User.hasMany(models.UserSkill, { foreignKey: 'userId' })
  };
  return User;
};
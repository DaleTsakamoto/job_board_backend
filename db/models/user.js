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
    const columnMapping = {
      through: 'UserSkill',
      otherKey: 'skillsId',
      foreignKey: 'userId'
    }
    const columnMapping2 = {
      through: 'JobsApplied',
      otherKey: 'jobId',
      foreignKey: 'userId'
    }
    User.hasMany(models.JobsApplied, { foreignKey: 'userId' })
    User.belongsToMany(models.Skill, columnMapping)
    User.belongsToMany(models.JobPosting, columnMapping)
  };
  return User;
};
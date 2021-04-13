'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSkill = sequelize.define('UserSkill', {
    userId: DataTypes.INTEGER,
    skillsId: DataTypes.INTEGER
  }, {});
  UserSkill.associate = function(models) {
  };
  return UserSkill;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING
  }, {});
  Skill.associate = function (models) {
    const columnMapping = {
      through: 'UserSkill',
      otherKey: 'userId',
      foreignKey: 'skillsId'
    }
    Skill.belongsToMany(models.User, columnMapping)
  };
  return Skill;
};
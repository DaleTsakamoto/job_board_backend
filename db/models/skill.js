'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING
  }, {});
  Skill.associate = function (models) {
    Skill.belongsToMany(models.User, { through: models.UserSkill })
  };
  return Skill;
};
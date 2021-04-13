'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employer = sequelize.define('Employer', {
    name: DataTypes.STRING,
    industry: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Employer.associate = function (models) {
    Employer.hasMany(models.JobPosting, { foreignKey: 'employerId' })
  };
  return Employer;
};
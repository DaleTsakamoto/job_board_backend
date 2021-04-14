'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employer = sequelize.define('Employer', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    industry: DataTypes.STRING,
    website: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  Employer.associate = function (models) {
    Employer.hasMany(models.JobPosting, { foreignKey: 'employerId' })
  };
  return Employer;
};
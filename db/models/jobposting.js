'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobPosting = sequelize.define('JobPosting', {
    position: DataTypes.STRING,
    description: DataTypes.STRING,
    employerId: DataTypes.INTEGER,
    salary: DataTypes.INTEGER,
    hiringProcess: DataTypes.STRING
  }, {});
  JobPosting.associate = function(models) {
    // associations can be defined here
  };
  return JobPosting;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobPosting = sequelize.define('JobPosting', {
    position: DataTypes.STRING,
    description: DataTypes.STRING,
    // employerId: DataTypes.INTEGER,
    employerId: {
      type: DataTypes.INTEGER,
      references: {model: 'Employers'}
    },
    salary: DataTypes.INTEGER,
    location: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    hiringProcess: DataTypes.STRING
  }, {});
  JobPosting.associate = function (models) {
    JobPosting.hasMany(models.JobsApplied, { foreignKey: 'jobId' })
  };
  return JobPosting;
};
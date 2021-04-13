'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobsApplied = sequelize.define('JobsApplied', {
    userId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER,
    accepted: DataTypes.BOOLEAN
  }, {});
  JobsApplied.associate = function(models) {
    // associations can be defined here
  };
  return JobsApplied;
};
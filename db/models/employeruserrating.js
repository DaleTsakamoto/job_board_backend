'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployerUserRating = sequelize.define('EmployerUserRating', {
    employerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  EmployerUserRating.associate = function(models) {
    // associations can be defined here
  };
  return EmployerUserRating;
};
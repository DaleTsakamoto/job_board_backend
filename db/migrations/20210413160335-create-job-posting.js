'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobPostings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      employerId: {
        type: Sequelize.INTEGER,
        references: { model: 'Employers' }
      },
      salary: {
        type: Sequelize.INTEGER
      },
      hiringProcess: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobPostings');
  }
};
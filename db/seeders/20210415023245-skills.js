'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Skills', [
      {
        name: 'JavaScript'
      },
      {
        name: 'Python'
      },
      {
        name: 'Java'
      },
      {
        name: 'C++'
      },
      {
        name: 'C'
      },
      {
        name: 'C#'
      },
      {
        name: 'Ruby'
      },
      {
        name: 'PHP'
      },
      {
        name: 'Go'
      },
      {
        name: 'R'
      },
      {
        name: 'Swift'
      },
      {
        name: 'React'
      },
      {
        name: 'Angular'
      },
      {
        name: 'Vue'
      },
      {
        name: 'Ember'
      },
      {
        name: 'Redux'
      },
      {
        name: 'Bootstrap'
      },
      {
        name: 'Jquery'
      },
      {
        name: 'Express'
      },
      {
        name: 'Flask'
      },
      {
        name: 'Django'
      },
      {
        name: 'Rubyonrails'
      },
      {
        name: 'Sequelize'
      },
      {
        name: 'SQLAlchemy'
      },
      {
        name: 'PostgreSQL'
      },
      {
        name: 'MySQL'
      },
      {
        name: 'MongoDB'
      },
      {
        name: 'NoSQL'
      },
      {
        name: 'Redis'
      },
      {
        name: 'AWS'
      },
      {
        name: 'Docker'
      },
      {
        name: 'Kubernetes'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

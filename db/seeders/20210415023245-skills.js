'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Skills', [
      {
        name: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Python',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Java',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'C++',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'C#',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PHP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Go',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'R',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Swift',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angular',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ember',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Redux',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bootstrap',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jquery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Express',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flask',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Django',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rubyonrails',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sequelize',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SQLAlchemy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PostgreSQL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MySQL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MongoDB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'NoSQL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Redis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AWS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Docker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kubernetes',
        createdAt: new Date(),
        updatedAt: new Date()
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

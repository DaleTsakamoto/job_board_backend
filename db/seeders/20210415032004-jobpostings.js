'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employers', [
      {
        position: 'Full Stack Developer',
        description: 'Looking for someone who can work on our MERN stack',
        employerId: 1,
        salary: 80000,
        hiringProcess: 'phone screen',
        location: 'Mountain View',
        experience: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Full Stack Engineer',
        description: 'Join a growing team working on innovative products. Must have experience with Java and Angular',
        employerId: 2,
        salary: 102000,
        hiringProcess: 'coding challenge',
        location: 'Seattle',
        experience: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Backend engineer - Python',
        description: 'Must have extensive experience with Python building web APIs',
        employerId: 3,
        salary: 85000,
        hiringProcess: 'take home challenge',
        location: 'Seattle',
        experience: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Jr Frontend Dev',
        description: 'Looking for a rockstar React developer',
        employerId: 4,
        salary: 75000,
        hiringProcess: 'phone screen',
        location: 'New York - open to remote',
        experience: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Data engineer',
        description: 'Works directly with our data scientists daily. Proficiency with CI/CD a plus.',
        employerId: 5,
        salary: 82000,
        hiringProcess: 'phone screen',
        location: 'Los Angeles',
        experience: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Full Stack Engineer',
        description: 'LAMP stack pros only!',
        employerId: 6,
        salary: 80000,
        hiringProcess: 'phone screen',
        location: 'Austin/remote',
        experience: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Full Stack Engineer',
        description: 'Looking for an enthusiastic developer proficient in C++',
        employerId: 7,
        salary: 110000,
        hiringProcess: 'interview',
        location: 'remote',
        experience: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Jr Developer',
        description: 'Bootcamp grad friendly! Come grow your career with us!',
        employerId: 8,
        salary: 75000,
        hiringProcess: 'phone screen',
        location: 'Miami',
        experience: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Wordpress developer',
        description: 'Must have experience with HTML/CSS, JavaScript and PHP',
        employerId: 9,
        salary: 80000,
        hiringProcess: 'zoom interview',
        location: 'Pheonix - open to remote',
        experience: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Backend Engineer',
        description: 'Looking for engineer who writes clean code. Preferred experience in Python',
        employerId: 10,
        salary: 95000,
        hiringProcess: 'zoom interview',
        location: 'remote',
        experience: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Software Engineer, Junior',
        description: 'Experience with programming languages, including Java, Python, and JavaScript, in industry or academic environments',
        employerId: 1,
        salary: 80000,
        hiringProcess: 'phone screen',
        location: 'San Francisco',
        experience: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Full Stack Software Engineer',
        description: 'We prefer to hire exceptional people who enjoy pushing themselves to stop climate change.',
        employerId: 2,
        salary: 110000,
        hiringProcess: 'interview',
        location: 'remote',
        experience: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Software Developer',
        description: 'This developer needs to be seasoned in development, with extensive experience in C#.',
        employerId: 3,
        salary: 105000,
        hiringProcess: 'phone screen',
        location: 'Miami',
        experience: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Software Engineer',
        description: 'We are seeking an EXPERIENCED engineer who wants to change how people interact with our product.',
        employerId: 4,
        salary: 12000,
        hiringProcess: 'zoom interview',
        location: 'Oakland - open to remote',
        experience: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        position: 'Backend Engineer',
        description: 'Looking for someone who posseses a deep understanding of any object-oriented programming language.',
        employerId: 5,
        salary: 95000,
        hiringProcess: 'zoom interview',
        location: 'San Diego',
        experience: 2,
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

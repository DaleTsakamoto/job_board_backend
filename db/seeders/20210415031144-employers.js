'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employers', [
      {
        name: 'Tesla',
        email: 'tesla@gmail.com',
        industry: 'automotive',
        website: 'https://www.tesla.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Google',
        email: 'google@gmail.com',
        industry: 'tech',
        website: 'https://www.google.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Microsoft',
        email: 'microsoft@gmail.com',
        industry: 'software',
        website: 'https://www.microsoft.com/en-us/?ql=1',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reddit',
        email: 'reddit@gmail.com',
        industry: 'social media',
        website: 'https://www.reddit.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Facebook',
        email: 'facebook@gmail.com',
        industry: 'social media',
        website: 'https://www.facebook.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Draft Kings',
        email: 'draftkings@gmail.com',
        industry: 'sports',
        website: 'https://www.draftkings.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spotify',
        email: 'spotify@gmail.com',
        industry: 'tech',
        website: 'https://www.spotify.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Google',
        email: 'google@gmail.com',
        industry: 'tech',
        website: 'https://www.google.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'JP Morgan',
        email: 'jpmorgan@gmail.com',
        industry: 'banking',
        website: 'https://www.jpmorgan.com/',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Goldman Sachs',
        email: 'goldmansachs@gmail.com',
        industry: 'banking',
        website: 'https://www.goldmansachs.com/',
        hashedPassword: bcrypt.hashSync('password'),
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

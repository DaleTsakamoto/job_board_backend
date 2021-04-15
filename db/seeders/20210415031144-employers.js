'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employers', [
      {
        name: 'Tesla',
        email: 'tesla@gmail.com',
        industry: 'automotive',
        website: 'https://i.etsystatic.com/16581340/r/il/b7cf55/1423184385/il_570xN.1423184385_8f3q.jpg',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Google',
        email: 'google@gmail.com',
        industry: 'tech',
        website: 'https://www.citypng.com/public/uploads/preview/-11596994727l1jw5lvpmc.png',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Microsoft',
        email: 'microsoft@gmail.com',
        industry: 'software',
        website: 'https://e7.pngegg.com/pngimages/702/910/png-clipart-microsoft-logo-business-technology-high-definition-video-microsoft-angle-text.png',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reddit',
        email: 'reddit@gmail.com',
        industry: 'social media',
        website: 'https://miro.medium.com/max/1838/1*NrGwC1BpEBeMEgRQ3ZhbkQ.jpeg',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Facebook',
        email: 'facebook@gmail.com',
        industry: 'social media',
        website: 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Draft Kings',
        email: 'draftkings@gmail.com',
        industry: 'sports',
        website: 'https://fontmeme.com/images/DraftKings-logo-font.png',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spotify',
        email: 'spotify@gmail.com',
        industry: 'tech',
        website: 'https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   name: 'Google',
      //   email: 'google@gmail.com',
      //   industry: 'tech',
      //   website: 'https://www.google.com/',
      //   hashedPassword: bcrypt.hashSync('password'),
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      {
        name: 'JP Morgan',
        email: 'jpmorgan@gmail.com',
        industry: 'banking',
        website: 'https://902558.smushcdn.com/2161880/wp-content/uploads/2017/09/JP-Morgan-Chase-logo.jpg?lossy=1&strip=1&webp=1',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Goldman Sachs',
        email: 'goldmansachs@gmail.com',
        industry: 'banking',
        website: 'https://i.pinimg.com/originals/8d/3f/e9/8d3fe9ee0d27bc5c371aa1a86c93d6a7.png',
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

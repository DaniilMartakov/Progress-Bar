const { hash } = require('bcrypt');
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pass = await hash('123', 10);
    const usersArray = [{
      name: 'SuperAdmin',
      username: 'superAdmin@mail.ru',
      password: pass,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];

    for (let i = 0; i < 4; i++) {
      usersArray.push({
        name: faker.name.fullName(),
        username: `admin${i + 1}@mail.ru`,
        password: pass,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    for (let i = 0; i < 4; i++) {
      usersArray.push({
        name: faker.name.fullName(),
        username: `user${i + 1}@mail.ru`,
        password: pass,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Users', usersArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, { restartIdentity: true, truncate: true });
  },
};

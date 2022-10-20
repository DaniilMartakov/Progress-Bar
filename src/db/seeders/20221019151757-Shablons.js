/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shablons', [{
      name: 'John Doe',
      team: 'yuy',
      coach: 'John',
      user_id: 1,
      q1: true,
      q2: true,
      q3: true,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
      q10: false,
      q11: false,
      q12: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Rer',
      team: 'yuy',
      coach: 'J',
      user_id: 1,
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: false,
      q6: false,
      q7: false,
      q8: true,
      q9: false,
      q10: false,
      q11: false,
      q12: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shablons', null, {});
  },
};

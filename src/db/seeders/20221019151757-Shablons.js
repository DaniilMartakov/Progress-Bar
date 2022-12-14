/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shablons', [{
      name: 'Катерина Сергеева',
      team: 'Лисы',
      coach: 'Виктория Иванова',
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
      name: 'Павел Семенов',
      team: 'Волки',
      coach: 'Джон Доуи',
      user_id: 1,
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
      q7: true,
      q8: true,
      q9: false,
      q10: false,
      q11: false,
      q12: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Мария Антуанетта',
      team: 'Страусы',
      coach: 'Петр Доуи',
      user_id: 1,
      q1: true,
      q2: true,
      q3: false,
      q4: false,
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
    },
    {
      name: 'Валера Семенов',
      team: 'Волки',
      coach: 'Джон Доуи',
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

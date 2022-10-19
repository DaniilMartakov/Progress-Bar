/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shablons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      team: {
        type: Sequelize.STRING,
      },
      coach: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        referenses: {
          model: 'Users',
          key: 'id',
        },
      },
      q1: {
        type: Sequelize.BOOLEAN,
      },
      q2: {
        type: Sequelize.BOOLEAN,
      },
      q3: {
        type: Sequelize.BOOLEAN,
      },
      q4: {
        type: Sequelize.BOOLEAN,
      },
      q5: {
        type: Sequelize.BOOLEAN,
      },
      q6: {
        type: Sequelize.BOOLEAN,
      },
      q7: {
        type: Sequelize.BOOLEAN,
      },
      q8: {
        type: Sequelize.BOOLEAN,
      },
      q9: {
        type: Sequelize.BOOLEAN,
      },
      q10: {
        type: Sequelize.BOOLEAN,
      },
      q11: {
        type: Sequelize.BOOLEAN,
      },
      q12: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shablons');
  },
};

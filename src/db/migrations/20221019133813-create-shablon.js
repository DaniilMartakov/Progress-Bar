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
      target: {
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
        defaultValue: false,
      },
      q2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q8: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q9: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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

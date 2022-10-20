const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shablon extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Shablon.init({
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    coach: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    q1: DataTypes.BOOLEAN,
    q2: DataTypes.BOOLEAN,
    q3: DataTypes.BOOLEAN,
    q4: DataTypes.BOOLEAN,
    q5: DataTypes.BOOLEAN,
    q6: DataTypes.BOOLEAN,
    q7: DataTypes.BOOLEAN,
    q8: DataTypes.BOOLEAN,
    q9: DataTypes.BOOLEAN,
    q10: DataTypes.BOOLEAN,
    q11: DataTypes.BOOLEAN,
    q12: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Shablon',
  });
  return Shablon;
};

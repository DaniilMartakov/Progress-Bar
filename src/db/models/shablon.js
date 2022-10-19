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
  }, {
    sequelize,
    modelName: 'Shablon',
  });
  return Shablon;
};

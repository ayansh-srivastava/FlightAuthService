'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Auth.associate = function(models) {
    Auth.belongsToMany(models.User, {
      through: 'user_auth',
      as: 'users'
    });
  };
  Auth.init({
    name: {
      type:DataTypes.STRING,
      allownull:false}
  }, {
    sequelize,
    modelName: 'Auth',
  });
  return Auth;
};
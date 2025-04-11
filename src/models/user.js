'use strict';
const {Model} = require('sequelize');
const bcrypt = require('bcrypt');
const model=require('./index');
const saltRounds = 10;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique:true,
      validate:{
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        max: 15,                  // only allow values <= 23
        min: 8,
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = function(models) {
    User.belongsToMany(models.Auth, {
      through: 'user_auth',
      as: 'roles'
    });
  };
  User.beforeCreate(async (user, options) => {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, saltRounds);
    }
  });
  
  return User;
};
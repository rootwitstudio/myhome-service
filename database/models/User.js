'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      mobile: DataTypes.STRING
    },
    {}
  );
  return User;
};

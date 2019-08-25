'use strict';
module.exports = (sequelize, DataTypes) => {
  const example = sequelize.define('example', {
    name: DataTypes.STRING
  }, {});
  example.associate = function(models) {
    // associations can be defined here
  };
  return example;
};
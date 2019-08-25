'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('examples', [{
      name: 'example 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'example 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('examples', null, {});
  }
};

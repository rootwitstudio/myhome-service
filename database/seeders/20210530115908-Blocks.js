'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
        'Blocks',
        [
          {
            name: 'Block A',
            description: 'janedoe@example.com',
            noOfFloors: 4,
            noOfFlats: 30,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Block B',
            description: 'janedoe@example.com',
            noOfFloors: 4,
            noOfFlats: 30,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
    )
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Blocks', null, {})

};

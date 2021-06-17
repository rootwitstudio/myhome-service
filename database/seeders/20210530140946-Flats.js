'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
        'Flats',
        [
          {
            name: 'H404',
            description: 'janedoe@example.com',
            floor: 4,
            blockId:1,
            buildUpArea: 30,
            carpetArea: 20,
            bedroom:2,
            bathroom:2,
            carParking:2,
            tenantType:'Self',
            isAvailableForRent:'No',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
    )
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Flats', null, {})

};

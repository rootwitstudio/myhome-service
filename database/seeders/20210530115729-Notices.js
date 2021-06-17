'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.bulkInsert(
          'Notices',
          [
            {
              title: 'Jane Doe',
              description: 'janedoe@example.com',
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              title: 'Jon Doe',
              description: 'jondoe@example.com',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ],
          {}
      ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Notices', null, {})
};

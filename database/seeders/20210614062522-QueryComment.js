'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.bulkInsert(
          'QueryComments',
          [
            {
              queryId: 1,
              content: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              queryId: 2,
              content:
                  'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ],

          {}
      ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('QueryComments', null, {})
};

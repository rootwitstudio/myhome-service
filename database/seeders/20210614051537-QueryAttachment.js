'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.bulkInsert(
          'QueryAttachments',
          [
            {
              queryId: 1,
              url: 'hispotan de nu',
              description: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              queryId: 2,
              url: 'some dummy title',
              description:
                  'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ],

          {}
      ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('QueryAttachments', null, {})
};

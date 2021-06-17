'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Jane Doe',
                    email: 'janedoe@example.com',
                    mobile: '9597045243',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Jon Doe',
                    email: 'jondoe@example.com',
                    mobile: '7418594542',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};

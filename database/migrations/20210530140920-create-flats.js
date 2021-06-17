'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      floor:{
        type: Sequelize.STRING
      },
      buildUpArea:{
        type: Sequelize.STRING
      },
      carpetArea:{
        type: Sequelize.STRING
      },
      bedroom:{
        type: Sequelize.STRING
      },
      bathroom:{
        type: Sequelize.STRING
      },
      carParking:{
        type: Sequelize.STRING
      },
      tenantType:{
        type: Sequelize.STRING
      },
      isAvailableForRent:{
        type: Sequelize.STRING
      },
      blockId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Blocks'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Flats');
  }
};

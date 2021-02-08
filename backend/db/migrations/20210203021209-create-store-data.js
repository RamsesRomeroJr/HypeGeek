'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoreData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      styleId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shoeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lowestPrice: {
        type: Sequelize.INTEGER
      },
      stockxLow: {
        type: Sequelize.INTEGER
      },
      goatLow: {
        type: Sequelize.INTEGER
      },
      flightClubLow: {
        type: Sequelize.INTEGER
      },
      stadiumGoodsLow: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('StoreData');
  }
};

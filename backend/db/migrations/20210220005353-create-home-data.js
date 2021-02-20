'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HomeData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      styleID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shoeName: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      stockXLow: {
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
      thumbnail: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('HomeData');
  }
};

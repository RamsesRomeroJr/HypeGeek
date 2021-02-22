'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SneakerInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      styleID: {
        type: Sequelize.STRING
      },
      stockXLow: {
        type: Sequelize.INTEGER
      },
      stockXLink: {
        type: Sequelize.STRING
      },
      goatLow: {
        type: Sequelize.INTEGER
      },
      goatLink: {
        type: Sequelize.STRING
      },
      flightClubLow: {
        type: Sequelize.INTEGER
      },
      flightClubLink: {
        type: Sequelize.STRING
      },
      stadiumGoodsLow: {
        type: Sequelize.INTEGER
      },
      stadiumGoodsLink: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      retailPrice: {
        type: Sequelize.INTEGER
      },
      releaseDate: {
        type: Sequelize.STRING
      },
      colorway: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      shoeName: {
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
    return queryInterface.dropTable('SneakerInfos');
  }
};

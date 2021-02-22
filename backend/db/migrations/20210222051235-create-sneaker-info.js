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
        type: Sequelize.STRING(1000)
      },
      goatLow: {
        type: Sequelize.INTEGER
      },
      goatLink: {
        type: Sequelize.STRING(1000)
      },
      flightClubLow: {
        type: Sequelize.INTEGER
      },
      flightClubLink: {
        type: Sequelize.STRING(1000)
      },
      stadiumGoodsLow: {
        type: Sequelize.INTEGER
      },
      stadiumGoodsLink: {
        type: Sequelize.STRING(1000)
      },
      linkImage1: {
        type: Sequelize.STRING(1000)
      },
      linkImage2: {
        type: Sequelize.STRING(1000)
      },
      linkImage3: {
        type: Sequelize.STRING(1000)
      },
      linkImage4: {
        type: Sequelize.STRING(1000)
      },
      thumbnail: {
        type: Sequelize.STRING(1000)
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
        type: Sequelize.STRING(1000)
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

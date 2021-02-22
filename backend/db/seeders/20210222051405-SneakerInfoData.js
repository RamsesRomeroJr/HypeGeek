'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SneakerInfos', [
        {
          styleID: '',
          stockXLow: 0,
          stockXLink:'',
          goatLow: 0,
          goatLink: '',
          flightClubLow: 0,
          flightClubLink: '',
          stadiumGoodsLow: 0,
          stadiumGoodsLink: '',
          thumbnail: '',
          retailPrice: 0,
          releaseDate: '',
          colorway: '',
          description: '',
          shoeName: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SneakerInfos', null, {});

  }
};

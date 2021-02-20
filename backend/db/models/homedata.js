'use strict';
module.exports = (sequelize, DataTypes) => {
  const HomeData = sequelize.define('HomeData', {
    styleID: DataTypes.STRING,
    shoeName: DataTypes.STRING,
    stockXLow: DataTypes.INTEGER,
    goatLow: DataTypes.INTEGER,
    flightClubLow: DataTypes.INTEGER,
    stadiumGoodsLow: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING
  }, {});
  HomeData.associate = function(models) {
    // associations can be defined here
  };
  return HomeData;
};

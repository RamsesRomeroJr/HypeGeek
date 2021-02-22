'use strict';
module.exports = (sequelize, DataTypes) => {
  const SneakerInfo = sequelize.define('SneakerInfo', {
    styleID: DataTypes.STRING,
    stockXLow: DataTypes.INTEGER,
    stockXLink: DataTypes.STRING,
    goatLow: DataTypes.INTEGER,
    goatLink: DataTypes.STRING,
    flightClubLow: DataTypes.INTEGER,
    flightClubLink: DataTypes.STRING,
    stadiumGoodsLow: DataTypes.INTEGER,
    stadiumGoodsLink: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    retailPrice: DataTypes.INTEGER,
    releaseDate: DataTypes.STRING,
    colorway: DataTypes.STRING,
    description: DataTypes.STRING,
    shoeName: DataTypes.STRING
  }, {});
  SneakerInfo.associate = function(models) {
    // associations can be defined here
  };
  return SneakerInfo;
};

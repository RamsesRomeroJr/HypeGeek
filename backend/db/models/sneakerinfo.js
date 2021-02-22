'use strict';
module.exports = (sequelize, DataTypes) => {
  const SneakerInfo = sequelize.define('SneakerInfo', {
    styleID: DataTypes.STRING,
    stockXLow: DataTypes.INTEGER,
    stockXLink: DataTypes.STRING(1000),
    goatLow: DataTypes.INTEGER,
    goatLink: DataTypes.STRING(1000),
    flightClubLow: DataTypes.INTEGER,
    flightClubLink: DataTypes.STRING(1000),
    stadiumGoodsLow: DataTypes.INTEGER,
    stadiumGoodsLink: DataTypes.STRING(1000),
    linkImage1: DataTypes.STRING(1000),
    linkImage2: DataTypes.STRING(1000),
    linkImage3: DataTypes.STRING(1000),
    linkImage4: DataTypes.STRING(1000),
    thumbnail: DataTypes.STRING(1000),
    retailPrice: DataTypes.INTEGER,
    releaseDate: DataTypes.STRING,
    colorway: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    shoeName: DataTypes.STRING
  }, {});
  SneakerInfo.associate = function(models) {
    // associations can be defined here
  };
  return SneakerInfo;
};

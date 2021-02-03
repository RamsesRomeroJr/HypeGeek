'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoreData = sequelize.define('StoreData', {
    styleId: DataTypes.INTEGER,
    shoeName: DataTypes.STRING,
    date: DataTypes.DATE,
    lowestPrice: DataTypes.INTEGER,
    stockxLow: DataTypes.INTEGER,
    goatLow: DataTypes.INTEGER,
    flightClubLow: DataTypes.INTEGER,
    stadiumGoodsLow: DataTypes.INTEGER
  }, {});
  StoreData.associate = function(models) {
    // associations can be defined here
  };
  return StoreData;
};
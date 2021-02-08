'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoreData = sequelize.define('StoreData', {
    styleId: DataTypes.STRING,
    shoeName: DataTypes.STRING,
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

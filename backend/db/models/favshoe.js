'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavShoe = sequelize.define('FavShoe', {
    userId: DataTypes.INTEGER,
    shoeName: DataTypes.STRING,
    styleId: DataTypes.STRING,
    thumbNail: DataTypes.STRING,
    retailPrice: DataTypes.INTEGER
  }, {});
  FavShoe.associate = function(models) {
    // associations can be defined here
    FavShoe.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return FavShoe;
};

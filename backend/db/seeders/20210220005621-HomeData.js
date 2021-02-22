'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('HomeData', [
        {
          styleID: '555088-105',
          shoeName: 'Jordan 1 Retro High Dark Mocha',
          stockXLow: 327,
          goatLow: 400,
          flightClubLow:399,
          stadiumGoodsLow: 415,
          thumbnail: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Dark-Mocha/Images/Air-Jordan-1-Retro-High-Dark-Mocha/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608736454'
          , createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          styleID: 'CJ0588-001',
          shoeName: 'Nike Air Max 95 Gunsmoke Pink Foam',
          stockXLow: 172,
          goatLow: 165,
          flightClubLow:120,
          stadiumGoodsLow: 200,
          thumbnail: 'https://stockx-360.imgix.net/Nike-Air-Max-95-Gunsmoke-Pink-Foam/Images/Nike-Air-Max-95-Gunsmoke-Pink-Foam/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609438551'
          , createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          styleID: 'FZ1267',
          shoeName: 'adidas Yeezy Boost 350 V2 Zyon',
          stockXLow: 237,
          goatLow: 227,
          flightClubLow:227,
          stadiumGoodsLow: 259,
          thumbnail: 'https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Zyon/Images/adidas-Yeezy-Boost-350-V2-Zyon/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606325931'
          , createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          styleID: 'FZ5000',
          shoeName: 'adidas Yeezy Boost 350 V2 Carbon',
          stockXLow: 248,
          goatLow: 257,
          flightClubLow:257,
          stadiumGoodsLow: 285,
          thumbnail: 'https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Carbon/Images/adidas-Yeezy-Boost-350-V2-Carbon/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609432836'
          , createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          styleID: 'CP9652',
          shoeName: 'adidas Yeezy Boost 350 V2 Black Red (2017/2020)',
          stockXLow: 365,
          goatLow: 384,
          flightClubLow:370,
          stadiumGoodsLow: 440,
          thumbnail: 'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606320792'
          , createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          styleID: 'GY0260',
          shoeName: 'adidas Yeezy 700 V3 Kyanite',
          stockXLow: 375,
          goatLow: 340,
          flightClubLow:340,
          stadiumGoodsLow: 410,
          thumbnail: 'https://images.stockx.com/images/adidas-Yeezy-700-V3-Kyanite.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1613472942'
          , createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          styleID: 'CT8532-012',
          shoeName: 'Jordan 3 Retro Cool Grey (2021)',
          stockXLow: 230,
          goatLow: 230,
          flightClubLow:336,
          stadiumGoodsLow: 390,
          thumbnail: 'https://images.stockx.com/images/Air-Jordan-3-Retro-Cool-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1611079916'
          , createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          styleID: 'CK5666-100',
          shoeName: 'Jordan 1 Retro High Fearless UNC Chicago',
          stockXLow: 340,
          goatLow: 309,
          flightClubLow:309,
          stadiumGoodsLow: 420,
          thumbnail: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Images/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606322396'
          , createdAt: new Date(),
          updatedAt: new Date()
        },

      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('HomeData', null, {});

  }
};

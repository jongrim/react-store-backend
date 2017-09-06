'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Leviathan Wakes',
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Caliban's War",
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Abbadon's Gate",
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cibola Burn',
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nemesis Games',
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Babylon's Ashes",
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Book', null, {});
  }
};
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
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'Back to the Future',
        price: 8.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Toy Story',
        price: 8.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'John Wick',
        price: 8.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Fifth Element',
        price: 8.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rogue One: A Star Wars Story',
        price: 15.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Star Wars: The Force Awakens',
        price: 15.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Star Wars: A New Hope',
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Star Wars: The Empire Strikes Back',
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Star Wars: Return of the Jedi',
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
    return queryInterface.bulkDelete('Movie', null, {});
  }
};
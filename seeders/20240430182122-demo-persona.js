'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [
      {
        nomCli: 'Victor',
        apeCli: 'Balboa Mercado',
        dirCli: 'Av. Algarrobos 123',
        dniCli: '71964637',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Personas', null, {});
  },
};

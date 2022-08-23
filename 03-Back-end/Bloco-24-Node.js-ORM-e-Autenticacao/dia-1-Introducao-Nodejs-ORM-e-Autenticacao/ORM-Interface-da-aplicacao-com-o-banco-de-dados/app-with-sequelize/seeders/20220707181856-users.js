'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: '6199365897'
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: '61998753651'
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', null, {})
  }
};

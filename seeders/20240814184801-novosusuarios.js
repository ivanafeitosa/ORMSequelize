'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tb_usuarios",[
      {
        nome: "Rosa Maria",
        email: "rosa.maria@gmail.com",
        role: "admin",
        senha: 'r0s4#12',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        nome: "Amanda Rodrigues",
        email: "amanda.rodrigues@gmail.com",
        role: "usuario",
        senha: 'mands04!ro',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        nome: "Gustavo Melborn",
        email: "gusta.melborn@gmail.com",
        role: "usuario",
        senha: '#Gust@7842',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        nome: "Pedro Levi",
        email: "pedro@gmail.com",
        role: "usuario",
        senha: 'pemorada04',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        nome: "Rodrigo Diórgenes",
        email: "ro.diorgenes@gmail.com",
        role: "usuario",
        senha: 'ro#d10rg3n3s@',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tb_usuarios", null, {})
  }
};

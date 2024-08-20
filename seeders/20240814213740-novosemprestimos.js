'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tb_emprestimos", [
      {
        dataEmprestimo: new Date(),
        dataDevolucao: new Date(),
        usuario_id: 1,
        livro_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dataEmprestimo: new Date(),
        dataDevolucao: new Date(),
        usuario_id: 2,
        livro_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dataEmprestimo: new Date(),
        dataDevolucao: new Date(),
        usuario_id: 3,
        livro_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dataEmprestimo: new Date(),
        dataDevolucao: new Date(),
        usuario_id: 4,
        livro_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dataEmprestimo: new Date(),
        dataDevolucao: new Date(),
        usuario_id: 5,
        livro_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tb_emprestimos", null, {});
  }
};

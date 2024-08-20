'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_emprestimos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataEmprestimo: {
        type: Sequelize.DATE
      },
      dataDevolucao: {
        type: Sequelize.DATE
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tb_usuarios',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      livro_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tb_livros',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_emprestimos');
  }
};
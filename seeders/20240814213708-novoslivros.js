'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tb_livros", [
      {
        titulo: "Código Limpo: habilidades práticas do Agile Software",
        autor: "Robert C. Martin",
        imagem: "https://m.media-amazon.com/images/I/71JpZHEGvWL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Microsoft .NET - architecting applications for the enterprise",
        autor: "Dino Esposito e Andrea Saltarello",
        imagem: "https://m.media-amazon.com/images/I/71GUffzzZqL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "O universo da programação",
        autor: "William Oliveira",
        imagem: "https://m.media-amazon.com/images/I/81E6DXg3YNL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "O programador pragmático - de aprendiz a mestre",
        autor: "Andrew Hunt e David Thomas",
        imagem: "https://m.media-amazon.com/images/I/61hewOW+8zL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Python para análise de dados",
        autor: "Wes McKinney",
        imagem: "https://m.media-amazon.com/images/I/71DBpD6-brL._SL1296_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tb_livros", null, {})
  }
};

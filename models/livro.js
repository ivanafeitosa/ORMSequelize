module.exports = (sequelize, DataTypes) => {
  const livro = sequelize.define('livro', {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    imagem: DataTypes.STRING,
  },
  {
    tableName: "tb_livros",
  });

  livro.associate = function (models) {
    livro.hasMany(models.emprestimo, {
      foreignKey: "livro_id",
    });
  };
  return livro;
};
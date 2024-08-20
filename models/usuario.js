module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    senha: DataTypes.STRING,    
  },
  {
    tableName: "tb_usuarios",
  });

  usuario.associate = function (models) {
    usuario.hasMany(models.emprestimo, {
      foreignKey: "usuario_id",
    });
  };
  return usuario;
};
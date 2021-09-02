const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../../models/usuario");
const { emailExiste } = require("../../helpers/db-validators");

const usuarioGet = (req, res = response) => {
  res.json({
    msg: "get API-controler",
  });
};

const usuarioPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //guarda registro en base de datos
  await usuario.save();

  res.json({
    usuario,
  });
};

const usuarioPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    msg: "put API-controler",
    usuario,
  });
};

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: "patch API-controler",
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = {
  usuarioGet,
  usuarioDelete,
  usuarioPost,
  usuarioPatch,
  usuarioPut,
};

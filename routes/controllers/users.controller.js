const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../../models/usuario");

const usuarioGet = (req, res = response) => {
  res.json({
    msg: "get API-controler",
  });
};

const usuarioPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "Ese correo ya esta registrado",
    });
  }

  //encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //guarda registro en base de datos
  await usuario.save();

  res.json({
    usuario,
  });
};

const usuarioPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API-controler",
    id,
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

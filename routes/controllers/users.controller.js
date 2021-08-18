const { response } = require("express");

const usuarioGet = (req, res = response) => {
  res.json({
    msg: "get API-controler",
  });
};

const usuarioPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: "post API-controler",
    body,
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

const { Router } = require("express");
const {
  usuarioGet,
  usuarioDelete,
  usuarioPut,
  usuarioPatch,
  usuarioPost,
} = require("./controllers/users.controller");

const router = Router();

router.get("/", usuarioGet);

router.post("/", usuarioPost);

router.put("/", usuarioPut);

router.patch("/", usuarioPatch);

router.delete("/", usuarioDelete);

module.exports = router;

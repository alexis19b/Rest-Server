const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  usuarioGet,
  usuarioDelete,
  usuarioPut,
  usuarioPatch,
  usuarioPost,
} = require("./controllers/users.controller");

const router = Router();

router.get("/", usuarioGet);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser mayor a 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "El correo no es válido").isEmail(),
    check("rol", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validarCampos,
  ],
  usuarioPost
);

router.put("/:id", usuarioPut);

router.patch("/", usuarioPatch);

router.delete("/", usuarioDelete);

module.exports = router;

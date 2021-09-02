const { Router } = require("express");
const { check } = require("express-validator");
const {
  esRolValido,
  emailExiste,
  existeUsuarioId,
} = require("../helpers/db-validators");
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
    check("correo").custom(emailExiste),
    // check("rol", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usuarioPost
);

router.put(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeUsuarioId),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usuarioPut
);

router.patch("/", usuarioPatch);

router.delete("/", usuarioDelete);

module.exports = router;

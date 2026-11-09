const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/AccesoController");

const accesoController = new UsuariosController();

router.post("/registrarse", accesoController.registrarse);
router.post("/login", accesoController.login);

module.exports = router;
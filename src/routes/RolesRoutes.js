const express = require("express")
const router = express.Router()

const RolesController = require("../controllers/RolesController")

const rolesController = new RolesController()

router.get("/", rolesController.ver)
router.post("/", rolesController.insertar)
router.put("/:id", rolesController.actualizar)
router.delete("/:id", rolesController.eliminar)

module.exports = router
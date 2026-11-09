
let conectar = require("../conexion/db")

class RolesController {

    ver = async (req, res) => {
        let [respuesta] = await conectar.query(
            "SELECT * FROM roles"
        )

        return res.json(respuesta)
    }

    insertar = async (req, res) => {
        let { nombre, descripcion, id_usuarios } = req.body

        let respuesta = await conectar.query(
            "INSERT INTO roles (nombre, descripcion, id_usuarios) VALUES (?, ?, ?)",
            [nombre, descripcion, id_usuarios]
        )

        return res.json({
            mensaje: "Rol insertado correctamente"
        })
    }

    actualizar = async (req, res) => {
        let { nombre, descripcion, id_usuarios } = req.body

        let respuesta = await conectar.query(
            "UPDATE roles SET nombre=?, descripcion=?, id_usuarios=? WHERE id=?",
            [nombre, descripcion, id_usuarios, req.params.id]
        )

        return res.json({
            mensaje: "Rol actualizado correctamente"
        })
    }

    eliminar = async (req, res) => {
        let respuesta = await conectar.query(
            "DELETE FROM roles WHERE id=?",
            [req.params.id]
        )

        return res.json({
            mensaje: "Rol eliminado correctamente"
        })
    }
}

module.exports = RolesController

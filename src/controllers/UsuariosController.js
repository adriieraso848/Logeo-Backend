
let conectar = require("../conexion/db")
let bcrypt = require("bcrypt")

class UsuariosController {
    ver = async (req, res) => {
        let [respuesta] = await conectar.query(
            "SELECT id,nombre,apellido,direccion,telefono,correo FROM usuarios"
        )
        return res.json(respuesta)
    }

    actualizar = async (req, res) => {
        let { nombre, apellido, direccion, telefono, correo, password } = req.body
        let contrasena = await bcrypt.hash(password, 10)
        let respuesta = await conectar.query(
            "UPDATE usuarios SET nombre=?, apellido=?, direccion=?, telefono=?, correo=?, password=? WHERE id=?",
            [nombre, apellido, direccion, telefono, correo, contrasena, req.params.id]
        )
        return res.json({
            mensaje: "Usuario actualizado correctamente"
        })
    }

    eliminar = async (req, res) => {
        let respuesta = await conectar.query(
            "DELETE FROM usuarios WHERE id=?",
            [req.params.id]
        )
        return res.json({
            mensaje: "Usuario eliminado correctamente"
        })
    }
}

module.exports = UsuariosController
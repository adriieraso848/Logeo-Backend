let express=require("express");
let cors=require("cors");
let PORT=3000

const AccesoRoutes = require("./src/routes/AccesoRoutes")
const UsuariosRoutes = require("./src/routes/UsuariosRoutes")
const RolesRoutes = require("./src/routes/RolesRoutes")

const app=express();
app.use(cors())
app.use(express.json());


app.use("/api", AccesoRoutes);
app.use("/api/usuarios", UsuariosRoutes)
app.use("/api/roles", RolesRoutes)



app.listen(PORT,()=>{
    console.log("Servidor ejecutandose correctamente " + PORT)
});
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
function traerBaseDeDatos() {}
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ha_ejercicio_20",
});

router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", function (error, usuarios) {
    if (error) {
      throw error;
    } else {
      res.render("usuarios", { usuarios });
    }
  });
});

router.get("/crear", (req, res) => {
  res.render("crearUsuario", {});
});

/* hay que tocar esta ruta */
router.get("/editar", (req, res) => {
  res.render("cambiarUsuario");
});

/* ruta vacia  */
router.post("/crear", (req, res) => {
  const body = req.body;
  connection.query(
    `INSERT INTO \`users\` (\`firstname\`, \`lastname\`, \`age\`) VALUES (${body.firstname}, ${body.lastname}, ${body.age} )`,
    function (error, usuarios) {
      if (error) {
        res.json({ message: "No se pudo crear el usuario" });
        console.log("no");
        throw error;
      } else {
        res.json({ message: "Usuario creado" });
      }
    }
  );
});

/* patch */
router.post("/editar/:id", (req, res) => {
  connection.query(
    `UPDATE * FROM users WHERE id = ${req.params.id}`,
    function (error, usuarios) {
      if (error) {
        throw error;
      } else {
        usuario[req.params.id] = req.body.id;
        usuario[req.params.name] = req.body.name;

        res.render("usuarios", { usuarios });
      }
    }
  );
});

router.get("eliminar/:id", (req, res) => {});

module.exports = router;

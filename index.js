const express = require("express");
const app = express();
const port = 3005;
const usersRouter = require("./routes/userRouter");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use("/usuarios", usersRouter);

app.listen(port, (req, res) => {
  console.log(`http://localhost:${port} || servidor corriendo en ${port}`);
});

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("APP CORRIENDO");
});

app.listen(port, () => {
  console.log(`app corriendo en http://localhost:${port}`);
});

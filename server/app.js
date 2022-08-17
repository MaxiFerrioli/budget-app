const express = require("express");
const app = express();
const operationRoutes = require("./routes/operation");

require("dotenv").config();

var cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("APP CORRIENDO");
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use("/operation", operationRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
  next(error);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app corriendo en http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const operationRoutes = require("./routes/operation");

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

app.listen(port, () => {
  console.log(`app corriendo en http://localhost:${port}`);
});

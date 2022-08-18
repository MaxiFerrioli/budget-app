const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

var cors = require('cors');
app.use(cors());

const operationRoutes = require('./routes/operation');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Personal Budget');
});

app.use('/operation', operationRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(port, () => {
  console.log(`Personal Budget app listening at http://localhost:${port}`);
});
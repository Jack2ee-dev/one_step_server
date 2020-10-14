const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const mysqlConnection = require('./databases/connection');

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(cors());

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(statusCode).json({ message, data });
});

mysqlConnection();

app.listen(8080);

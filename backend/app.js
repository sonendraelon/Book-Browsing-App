const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGODB_URI } = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/search', searchRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error,
  });
});

module.exports = app;
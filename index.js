const express = require('express');
const router = require('./routes');

const app = express();
const port = 3000;

// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Router
app.use('/', router);

// Start listening
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
})
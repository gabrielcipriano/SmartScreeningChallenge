const express = require('express');

const app = express();
const port = 3000;

// Body parser middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Start listening
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
})
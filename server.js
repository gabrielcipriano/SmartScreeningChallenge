const app = require('./index')
const port = 3000;

app.get('/json/:fileName', (req, res) => {
  res.send('Hello World, from express' + Fil);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
})
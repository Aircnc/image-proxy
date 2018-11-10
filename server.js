const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/listings/:id', express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log(`server running at: http://127.0.0.1:${port}`);
});

app.get('/listings/:id/description', cors(), (req, res) => { // This is for requests made in component
  const { id } = req.params;
  res.redirect(`http://3.16.13.208/listings/${id}/description`);
  res.end();
});

app.get('/listings/:id/reservations', (req, res) => { // This is for requests made in component
  const { id } = req.params;
  res.redirect(`http://13.57.206.173/listings/${id}/reservations`);
  res.end();
});

app.get('/listings/:id/reviews', (req, res) => {  // This is for requests made in component
  const { id } = req.params;
  res.redirect(`http://18.191.158.244/listings/${id}/reviews`);
  res.end();
});
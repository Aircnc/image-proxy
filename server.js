const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/listings/:id', express.static(path.join(__dirname, './public')));
//app.use('/lib', express.static(path.join(__dirname, './public/lib')));

app.listen(port, () => {
  console.log(`server running at: http://127.0.0.1:${port}`);
});


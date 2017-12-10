const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const equipment = require('./routes/equipment');

let port = 3000;

let app = express();

// view engine
// TODO: why ejs???
app.set('views', path.join(__dirname, 'views'));
app.set('view engine',  'ejs');
app.engine('html', require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname, 'client')));

// body parser mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/equipment', equipment);

app.listen(port, () => {
  console.log('Server started on port ' + port);
});

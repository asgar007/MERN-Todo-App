const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoos')
var path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//use express router
app.use('/', require('./routes/index'));
console.log('router loaded');
// app.use(express.static(path.join(__dirname, 'assets')))
// setup view engine
// app.set('view engine', 'ejs');
// app.set('views', './views');

app.listen(port, function(err){
    if(err){ console.log(`Error : ${err}`); }
    console.log(`server successfully started on ${port}`);
});
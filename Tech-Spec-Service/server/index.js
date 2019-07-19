const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/index.js');
const router = require('./router.js');

const app = express();
const port = 3010;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(morgan('dev'));


app.use('/', router)

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Server is up and running on Port ${port}`));
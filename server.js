require('dotenv').load();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const { getNewsFromFeed } = require('./handlers/newsHandler.js');

const app = express();

// view engine setup
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars');

app.get('/', getNewsFromFeed);

app.listen(process.env.port, () => console.log('App running on: http://localhost:3000'));

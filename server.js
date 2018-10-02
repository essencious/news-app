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

app.use(express.static(path.join(__dirname, '/assets')));

app.get('/', (req, res) => res.render('index'));

app.get('/api/news/', getNewsFromFeed);

app.listen(process.env.port, () => console.log('App running on: http://localhost:3000'));

const request = require('request');
const { selectNewsArticles } = require('./dataHandlers/newsArticleTransformer.js');

const {
  NEWS_HOST,
  NEWS_API_KEY,
} = process.env;

const getURL = (searchTerm) => {
  let url = 'top-headlines?country=gb';
  if (searchTerm) {
    url = `everything?q=${searchTerm}`;
  }
  return `${NEWS_HOST}${url}&apiKey=${NEWS_API_KEY}`;
};

const getNewsFromFeed = (req, res) => {
  const searchTerm = req.query.search;
  request(
    getURL(searchTerm),
    { json: true },
    (err, _, body) => {
      if (err) {
        return console.log(err);
      }
      const newsArticles = body.articles.map(selectNewsArticles);
      return res.render('index', { news: newsArticles });
    },
  );
};

module.exports = { getNewsFromFeed };

const selectNewsArticles = ({
  title,
  description,
  url,
  urlToImage: image,
}) => ({
  title,
  description,
  url,
  image,
});

module.exports = { selectNewsArticles };

const fetchNews = (searchTerm) => {
  let url = '/api/news/';
  if (searchTerm) {
    url = `/api/news/?search=${searchTerm}`;
  }
  const searchResultWrapper = document.querySelector('#search-results');
  window.fetch(url)
    .then(response => response.json())
    .then((newsArticles) => {
      searchResultWrapper.innerHTML = '';
      newsArticles.forEach((article) => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('card');
        articleCard.innerHTML = `
      <img class="card-img-top" src="${article.image}" alt="${article.title}">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description}</p>
        <a href="${article.url}" class="btn btn-primary">Read more</a>
      </div>`;
        searchResultWrapper.appendChild(articleCard);
      });
    });
};

const app = () => {
  document.querySelector('#filterOptions').addEventListener('click', ({ target }) => {
    if (target && target.nodeName === 'BUTTON') {
      fetchNews(target.value);
    }
  });

  fetchNews();
};

document.addEventListener('DOMContentLoaded', () => {
  app();
});

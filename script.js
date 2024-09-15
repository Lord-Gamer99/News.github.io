// Your News API key
const apiKey = '4afa6e063794448b8bd10dd27bed94ee'; // Replace with your actual NewsAPI key

// Fetch news articles based on the search query
function fetchNews() {
    const query = document.getElementById('searchQuery').value;
    const newsArticles = document.getElementById('newsArticles');
    newsArticles.innerHTML = ''; // Clear previous search results

    if (!query) {
        alert('Please enter a keyword to search');
        return;
    }

    // API URL to fetch news based on query
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    // Fetch news articles from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                data.articles.forEach(article => {
                    const articleDiv = document.createElement('div');
                    articleDiv.classList.add('article');

                    const title = document.createElement('h3');
                    title.innerHTML = article.title;
                    articleDiv.appendChild(title);

                    const description = document.createElement('p');
                    description.innerHTML = article.description ? article.description : 'No description available';
                    articleDiv.appendChild(description);

                    const link = document.createElement('a');
                    link.href = article.url;
                    link.target = '_blank';
                    link.innerHTML = 'Read more';
                    articleDiv.appendChild(link);

                    newsArticles.appendChild(articleDiv);
                });
            } else {
                newsArticles.innerHTML = 'No articles found for this keyword.';
            }
        })
        .catch(error => {
            console.error('Error fetching the news:', error);
        });
}

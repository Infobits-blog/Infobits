function filterArticles(category) {
    const articles = document.querySelectorAll('.post-card');

    articles.forEach(article => {
        if (category === 'all') {
            article.style.display = 'block';
        } else if (article.classList.contains(category)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}


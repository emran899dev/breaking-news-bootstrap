import React, { useEffect, useState } from 'react';
import News from '../News.js/News';

const TopHeadine = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d688c5221c104003a6efe3d6243dd647'
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h1>Top Headine: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadine;
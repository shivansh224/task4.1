import React from 'react';

const articlesData = [
  { title: 'React vs Angular', description: 'Comparing frameworks', stars: 4.8, author: 'Emily' },
  { title: 'Node.js Best Practices', description: 'Write better code', stars: 5.0, author: 'Jason' },
  { title: 'React State Management', description: 'Handling state', stars: 4.9, author: 'Derek' },
  { title: 'Building APIs with Express', description: 'Create scalable APIs', stars: 5.0, author: 'Sarah' },
];

const ArticlesSection = () => {
  return (
    <section className="section">
      <h2 className="section-title">Featured Articles</h2>
      <div className="card-grid">
        {articlesData.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={`https://picsum.photos/200/150?random=${index}`} alt="Article" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>⭐ {article.stars} - {article.author}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View all articles</button>
    </section>
  );
};

export default ArticlesSection;

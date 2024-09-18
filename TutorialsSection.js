import React from 'react';

const tutorialsData = [
  { title: 'Learn JavaScript ES6', description: 'Understanding ES6', stars: 4.7, author: 'John' },
  { title: 'React Router Basics', description: 'Navigation in React', stars: 5.0, author: 'Sophia' },
  { title: 'Express Middleware', description: 'Building with middleware', stars: 4.9, author: 'Michael' },
  { title: 'React and Forms', description: 'Creating forms in React', stars: 5.0, author: 'Lisa' },
];

const TutorialsSection = () => {
  return (
    <section className="section">
      <h2 className="section-title">Featured Tutorials</h2>
      <div className="card-grid">
        {tutorialsData.map((tutorial, index) => (
          <div className="tutorial-card" key={index}>
            <img src={`https://picsum.photos/200/150?random=${index + 4}`} alt="Tutorial" />
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <p>⭐ {tutorial.stars} - {tutorial.author}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View all tutorials</button>
    </section>
  );
};

export default TutorialsSection;

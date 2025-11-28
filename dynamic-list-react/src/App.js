import React from 'react';

function App() {
  // Hardcoded list of items
  const techItems = ["React", "JavaScript", "CSS"];

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Tech Stack List</h1>
        <p>Here are the technologies I'm learning:</p>
      </header>
      
      <main className="list-container">
        <ul className="tech-list">
          {techItems.map((item, index) => (
            <li key={index} className="tech-item">
              {item}
            </li>
          ))}
        </ul>
      </main>
      
      <footer className="app-footer">
        <p>Total items: {techItems.length}</p>
      </footer>
    </div>
  );
}

export default App;
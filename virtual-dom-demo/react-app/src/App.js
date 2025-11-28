import React, { useState, useRef, useEffect } from 'react';

function App() {
  // React state for title
  const [reactTitle, setReactTitle] = useState('React Virtual DOM Demo');
  const [reactUpdateCount, setReactUpdateCount] = useState(0);
  
  // Refs to track DOM updates
  const titleRef = useRef(null);
  const counterRef = useRef(null);
  const domUpdatesRef = useRef(0);

  // Effect to track DOM updates
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          domUpdatesRef.current += 1;
          if (counterRef.current) {
            counterRef.current.textContent = domUpdatesRef.current;
          }
        }
      });
    });

    if (titleRef.current) {
      observer.observe(titleRef.current, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    return () => observer.disconnect();
  }, []);

  // React button handler
  const handleReactUpdate = () => {
    const newTitle = `React Title Updated ${reactUpdateCount + 1}`;
    setReactTitle(newTitle);
    setReactUpdateCount(prev => prev + 1);
  };

  // Vanilla JS button handler
  const handleVanillaUpdate = () => {
    const vanillaTitle = document.getElementById('vanillaTitle');
    if (vanillaTitle) {
      vanillaTitle.textContent = `Vanilla Title Updated ${Date.now()}`;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Virtual DOM Performance Demo</h1>
        <p>Compare DOM update efficiency between React and Vanilla JS</p>
      </header>

      <div className="demo-container">
        {/* React Section */}
        <section className="demo-section react-section">
          <h2>React (Virtual DOM)</h2>
          <div className="content-box">
            <p ref={titleRef} className="title-display">{reactTitle}</p>
            <button onClick={handleReactUpdate} className="btn react-btn">
              Change Title (React)
            </button>
            <div className="stats">
              <p>React State Updates: <strong>{reactUpdateCount}</strong></p>
              <p>Actual DOM Updates: <strong ref={counterRef}>0</strong></p>
            </div>
          </div>
        </section>

        {/* Vanilla JS Section */}
        <section className="demo-section vanilla-section">
          <h2>Vanilla JavaScript (Direct DOM)</h2>
          <div className="content-box">
            <p id="vanillaTitle" className="title-display">Vanilla JS DOM Demo</p>
            <button onClick={handleVanillaUpdate} className="btn vanilla-btn">
              Change Title (Vanilla JS)
            </button>
            <div className="stats">
              <p>Direct DOM Manipulations: <strong id="vanillaUpdateCount">0</strong></p>
              <p>Actual DOM Updates: <strong id="vanillaDomUpdateCount">0</strong></p>
            </div>
          </div>
        </section>
      </div>

      <div className="explanation">
        <h3>How It Works:</h3>
        <ul>
          <li><strong>React Button:</strong> Updates state, Virtual DOM compares changes, batches updates</li>
          <li><strong>Vanilla JS Button:</strong> Directly manipulates DOM, causes immediate updates</li>
          <li><strong>DOM Update Counter:</strong> Tracks actual browser repaints using MutationObserver</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
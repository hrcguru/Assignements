// components/AutoCorrectApp.js
import React, { useState } from 'react';
import CorrectedText from './CorrectedText';
import './AutoCorrectApp.css';

const AutoCorrectApp = () => {
  const [inputText, setInputText] = useState('');
  
  // Predefined corrections dictionary
  const corrections = {
    "teh": "the",
    "recieve": "receive",
    "adress": "address",
    "wierd": "weird",
    "thier": "their",
    "seperate": "separate",
    "definately": "definitely",
    "occured": "occurred",
    "untill": "until",
    "goverment": "government",
    "alot": "a lot",
    "neccessary": "necessary",
    "truely": "truly",
    "wierd": "weird",
    "occurence": "occurrence",
    "wierd": "weird"
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="auto-correct-app">
      <header className="app-header">
        <h1>AutoCorrect App</h1>
        <p className="app-subtitle">Type in the text box below and see misspelled words corrected in real-time!</p>
      </header>
      
      <div className="app-container">
        <div className="input-section">
          <label htmlFor="text-input" className="input-label">
            Your Text:
          </label>
          <textarea
            id="text-input"
            className="text-input"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your text here... (Try: I recieve teh wierd adress)"
            rows="6"
          />
          <div className="input-info">
            <span className="char-count">{inputText.length} characters</span>
            <span className="word-count">
              {inputText.trim() === '' ? 0 : inputText.trim().split(/\s+/).length} words
            </span>
          </div>
        </div>
        
        <div className="preview-section">
          <h2 className="preview-title">
            <span className="title-icon">✏️</span> Corrected Preview
          </h2>
          
          <CorrectedText 
            text={inputText} 
            corrections={corrections} 
          />
          
          <div className="dictionary-section">
            <h3 className="dictionary-title">
              <span className="title-icon">📚</span> AutoCorrect Dictionary
            </h3>
            <div className="corrections-grid">
              {Object.entries(corrections).map(([wrong, correct]) => (
                <div key={wrong} className="correction-item">
                  <span className="wrong-word">{wrong}</span>
                  <span className="arrow">→</span>
                  <span className="correct-word">{correct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="instructions">
          <h3>How it works:</h3>
          <ul>
            <li>Type in the text box above</li>
            <li>Watch as misspelled words are automatically corrected below</li>
            <li>See how many words were corrected in the preview</li>
            <li>Try the example: "I recieve teh wierd adress"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutoCorrectApp;
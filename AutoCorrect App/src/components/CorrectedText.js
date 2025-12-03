// components/CorrectedText.js
import React from 'react';
import './CorrectedText.css';

const CorrectedText = ({ text, corrections }) => {
  // Function to apply corrections to the text
  const applyCorrections = (inputText, correctionsDict) => {
    if (!inputText.trim()) return { correctedText: '', correctionCount: 0 };
    
    const words = inputText.split(/\s+/);
    let correctionCount = 0;
    
    const correctedWords = words.map(word => {
      // Remove punctuation at the end of the word to check correction
      const punctuationRegex = /([.,!?;:]$)/;
      const punctuationMatch = word.match(punctuationRegex);
      const punctuation = punctuationMatch ? punctuationMatch[1] : '';
      const wordWithoutPunctuation = punctuation ? word.slice(0, -1) : word;
      
      // Check if the word (case-insensitive) is in our corrections dictionary
      const lowerCaseWord = wordWithoutPunctuation.toLowerCase();
      
      if (correctionsDict.hasOwnProperty(lowerCaseWord)) {
        correctionCount++;
        
        // Preserve original capitalization if the word started with a capital letter
        let correctedWord = correctionsDict[lowerCaseWord];
        if (wordWithoutPunctuation[0] === wordWithoutPunctuation[0].toUpperCase()) {
          correctedWord = correctedWord.charAt(0).toUpperCase() + correctedWord.slice(1);
        }
        
        return correctedWord + punctuation;
      }
      
      return word;
    });
    
    return {
      correctedText: correctedWords.join(' '),
      correctionCount
    };
  };

  const { correctedText, correctionCount } = applyCorrections(text, corrections);

  return (
    <div className="corrected-text-container">
      <div className="correction-stats">
        <div className="stat-item">
          <span className="stat-label">Words corrected:</span>
          <span className="stat-value">{correctionCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Original length:</span>
          <span className="stat-value">{text.length} chars</span>
        </div>
      </div>
      
      <div className="corrected-text-display">
        {correctedText ? (
          <p className="corrected-text">{correctedText}</p>
        ) : (
          <p className="placeholder-text">Corrected text will appear here...</p>
        )}
      </div>
      
      {correctionCount > 0 && (
        <div className="correction-highlights">
          <h4>Corrections Applied:</h4>
          <div className="highlights-list">
            {text.split(/\s+/).map((word, index) => {
              // Remove punctuation
              const cleanWord = word.replace(/[.,!?;:]$/g, '').toLowerCase();
              if (corrections.hasOwnProperty(cleanWord)) {
                return (
                  <div key={index} className="highlight-item">
                    <span className="original-highlight">{word}</span>
                    <span className="highlight-arrow">→</span>
                    <span className="corrected-highlight">{corrections[cleanWord]}</span>
                  </div>
                );
              }
              return null;
            }).filter(Boolean)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CorrectedText;
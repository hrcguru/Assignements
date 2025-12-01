import React, { useState } from 'react';

const ColorToggleButton = () => {
  const [isGreen, setIsGreen] = useState(true);

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  // Define colors
  const buttonColor = isGreen ? '#4CAF50' : '#FFEB3B'; // Green and Yellow
  const textColor = isGreen ? 'white' : 'black'; // Ensure text visibility
  
  // Current color name for display
  const colorName = isGreen ? 'Green' : 'Yellow';

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      {/* Button with inline styling */}
      <button
        onClick={toggleColor}
        style={{
          backgroundColor: buttonColor,
          color: textColor,
          padding: '15px 30px',
          fontSize: '18px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          minWidth: '200px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
      >
        Color: {colorName}
      </button>

      {/* Text message displaying current color */}
      <p style={{
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333'
      }}>
        Current Color: {colorName}
      </p>
    </div>
  );
};

export default ColorToggleButton;
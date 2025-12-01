import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div style={styles.card}>
      {/* Card Header with Title */}
      <div style={styles.cardHeader}>
        <h3 style={styles.title}>{title}</h3>
      </div>
      
      {/* Card Body with dynamic content */}
      <div style={styles.cardBody}>
        {children}
      </div>
    </div>
  );
};

// Inline styles for the Card component
const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '0',
    margin: '20px',
    width: '300px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #e0e0e0',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
    }
  },
  cardHeader: {
    backgroundColor: '#4a6fa5',
    color: 'white',
    padding: '16px 20px',
    borderBottom: '1px solid #3a5a8c'
  },
  title: {
    margin: '0',
    fontSize: '20px',
    fontWeight: '600'
  },
  cardBody: {
    padding: '20px',
    color: '#333',
    lineHeight: '1.6'
  }
};

export default Card;
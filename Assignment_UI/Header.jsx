import React from 'react';

const Header = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The Right Plan for Your Business</h1>
      <p style={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. 
        Facilis magnam, sed officiis commodi labore odit.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 50px',
    padding: '0 20px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '20px',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#718096',
    lineHeight: '1.6'
  }
};

export default Header;
import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Reusable Card Component Demo</h1>
      <p style={styles.subtitle}>Using children prop for dynamic content</p>
      
      <div style={styles.cardsContainer}>
        {/* Card 1: User Profile */}
        <Card title="User Profile">
          <div style={styles.content}>
            <img 
              src="https://via.placeholder.com/100" 
              alt="Profile" 
              style={styles.profileImage}
            />
            <h4 style={styles.name}>John Doe</h4>
            <p style={styles.info}>Software Developer</p>
            <p style={styles.description}>
              Passionate about creating beautiful and functional user interfaces.
            </p>
            <button style={styles.button}>View Profile</button>
          </div>
        </Card>

        {/* Card 2: Product Info */}
        <Card title="Product Details">
          <div style={styles.content}>
            <h4 style={styles.productName}>Premium Wireless Headphones</h4>
            <p style={styles.price}>$199.99</p>
            <ul style={styles.featuresList}>
              <li>🎧 Noise Cancellation</li>
              <li>🔋 30-hour Battery</li>
              <li>🎵 Hi-Fi Audio</li>
              <li>📱 Bluetooth 5.2</li>
            </ul>
            <div style={styles.rating}>
              ⭐⭐⭐⭐⭐ (4.8/5)
            </div>
            <button style={styles.button}>Add to Cart</button>
          </div>
        </Card>

        {/* Card 3: Blog Post */}
        <Card title="Latest Blog Post">
          <div style={styles.content}>
            <h4 style={styles.blogTitle}>The Future of React</h4>
            <p style={styles.blogMeta}>
              Published: March 15, 2024 • 5 min read
            </p>
            <p style={styles.blogExcerpt}>
              React continues to evolve with new features like Server Components, 
              concurrent rendering, and improved developer experience...
            </p>
            <div style={styles.tags}>
              <span style={styles.tag}>#React</span>
              <span style={styles.tag}>#JavaScript</span>
              <span style={styles.tag}>#WebDev</span>
            </div>
            <button style={styles.button}>Read More</button>
          </div>
        </Card>

        {/* Card 4: Statistics */}
        <Card title="Monthly Statistics">
          <div style={styles.content}>
            <div style={styles.stats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>1,234</span>
                <span style={styles.statLabel}>Visitors</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>567</span>
                <span style={styles.statLabel}>Sign-ups</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>89%</span>
                <span style={styles.statLabel}>Engagement</span>
              </div>
            </div>
            <p style={styles.statDescription}>
              March showed a 15% increase in user engagement compared to February.
            </p>
            <button style={styles.button}>View Report</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Styles for the App component
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    padding: '30px'
  },
  pageTitle: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '10px'
  },
  subtitle: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: '40px'
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  profileImage: {
    borderRadius: '50%',
    marginBottom: '15px'
  },
  name: {
    margin: '10px 0 5px 0',
    color: '#2c3e50'
  },
  info: {
    color: '#7f8c8d',
    margin: '0 0 15px 0'
  },
  description: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  productName: {
    margin: '0 0 10px 0',
    color: '#2c3e50'
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#e74c3c',
    margin: '0 0 15px 0'
  },
  featuresList: {
    listStyle: 'none',
    padding: '0',
    margin: '0 0 15px 0',
    width: '100%'
  },
  featuresListLi: {
    padding: '5px 0',
    borderBottom: '1px solid #eee'
  },
  rating: {
    marginBottom: '15px',
    color: '#f39c12'
  },
  blogTitle: {
    margin: '0 0 10px 0',
    color: '#2c3e50'
  },
  blogMeta: {
    color: '#7f8c8d',
    fontSize: '14px',
    margin: '0 0 15px 0'
  },
  blogExcerpt: {
    marginBottom: '15px'
  },
  tags: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  tag: {
    backgroundColor: '#e8f4fc',
    color: '#3498db',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '12px'
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '20px'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4a6fa5'
  },
  statLabel: {
    fontSize: '12px',
    color: '#7f8c8d',
    marginTop: '5px'
  },
  statDescription: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  button: {
    backgroundColor: '#4a6fa5',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
    ':hover': {
      backgroundColor: '#3a5a8c'
    }
  }
};

export default App;
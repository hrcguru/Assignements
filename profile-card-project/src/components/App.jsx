import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      bio: "Software engineer passionate about building scalable web applications. Loves hiking, photography, and open-source projects."
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      bio: "Product designer with over 8 years of experience in creating user-centered designs. Enjoys painting, traveling, and coffee tasting."
    },
    {
      id: 3,
      name: "Alex Johnson",
      age: 25,
      bio: "Data scientist specializing in machine learning and AI. In free time, enjoys playing guitar and reading science fiction novels."
    },
    {
      id: 4,
      name: "Maria Garcia",
      age: 29,
      bio: "Full-stack developer with expertise in React and Node.js. An avid traveler who has visited over 30 countries."
    },
    {
      id: 5,
      name: "David Chen",
      age: 35,
      bio: "A passionate entrepreneur and startup founder. Currently working on sustainable technology solutions. Minimalist lifestyle enthusiast."
    },
    {
      id: 6, // Testing edge cases
      name: "Test User",
      age: 22,
      bio: "This is a very short bio." // Less than 100 chars
    },
    {
      id: 7, // Testing missing props
      name: "Sam Wilson", // bio is missing
      age: 40
    },
    {
      id: 8, // Testing long bio
      name: "Emma Thompson",
      age: 27,
      bio: "Digital marketing specialist with a focus on SEO and content strategy. Enjoys blogging about travel experiences and photography. Currently learning French and planning to visit Paris next year. Always looking for new opportunities to grow professionally."
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Profile Cards</h1>
        <p className="subtitle">Reusable component with props and conditional rendering</p>
      </header>
      
      <main className="profiles-container">
        <div className="profiles-grid">
          {profiles.map(profile => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              age={profile.age}
              bio={profile.bio}
            />
          ))}
        </div>
      </main>
      
      <footer className="App-footer">
        <p>React Profile Card Component • Demonstrating props, conditional rendering, and string manipulation</p>
      </footer>
    </div>
  );
}

export default App;
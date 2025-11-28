import React from 'react';

const About = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Frontend Developer', bio: 'Specializes in React and modern JavaScript.' },
    { name: 'Jane Smith', role: 'UI/UX Designer', bio: 'Creates beautiful and intuitive user interfaces.' },
    { name: 'Mike Johnson', role: 'Backend Developer', bio: 'Handles server-side logic and databases.' }
  ];

  return (
    <div className="page">
      <h1>About Us</h1>
      <p>
        We are a passionate team of developers and designers dedicated to creating 
        exceptional web experiences. Our mission is to build applications that are 
        not only functional but also delightful to use.
      </p>
      <p>
        With years of experience in modern web technologies, we strive to stay 
        at the forefront of development trends and best practices.
      </p>
      
      <h2 style={{ marginTop: '3rem', color: '#667eea' }}>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <div className="role">{member.role}</div>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
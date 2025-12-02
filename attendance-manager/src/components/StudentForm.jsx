import React, { useState } from 'react';
import '../App.css';

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!name.trim()) {
      setError('Student name is required');
      return;
    }
    
    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters long');
      return;
    }
    
    // Clear error and add student
    setError('');
    onAddStudent(name.trim());
    setName('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="form-container">
      <h2>👨‍🎓 Add New Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="Enter student name..."
            className="student-input"
          />
          {error && <p className="error-message">⚠️ {error}</p>}
        </div>
        
        <button type="submit" className="add-student-btn">
          <span className="btn-icon">➕</span>
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
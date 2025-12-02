import React from 'react';
import '../App.css';

const StudentItem = ({ student, onToggleAttendance, onRemoveStudent }) => {
  const statusClass = student.present ? 'present' : 'absent';
  const statusIcon = student.present ? '✅' : '❌';
  const statusText = student.present ? 'Present' : 'Absent';

  return (
    <div className={`student-item ${statusClass}`}>
      <div className="student-info">
        <div className="student-avatar">
          <span className="avatar-text">{student.name.charAt(0)}</span>
        </div>
        
        <div className="student-details">
          <h4 className="student-name">{student.name}</h4>
          <span className="student-id">ID: {student.id}</span>
        </div>
      </div>

      <div className="student-actions">
        <div className="status-indicator">
          <span className="status-icon">{statusIcon}</span>
          <span className="status-text">{statusText}</span>
        </div>
        
        <div className="action-buttons">
          <button
            onClick={() => onToggleAttendance(student.id)}
            className={`toggle-btn ${student.present ? 'present' : 'absent'}`}
            title={student.present ? 'Mark as Absent' : 'Mark as Present'}
          >
            {student.present ? 'Mark Absent' : 'Mark Present'}
          </button>
          
          <button
            onClick={() => onRemoveStudent(student.id)}
            className="remove-btn"
            title="Remove student"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentItem;
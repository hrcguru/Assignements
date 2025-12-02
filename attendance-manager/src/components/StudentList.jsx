import React from 'react';
import StudentItem from './StudentItem';
import '../App.css';

const StudentList = ({ students, onToggleAttendance, onRemoveStudent }) => {
  if (students.length === 0) {
    return (
      <div className="empty-list">
        <p>No students to display. Add some students to get started!</p>
      </div>
    );
  }

  return (
    <div className="student-list-container">
      <div className="list-header">
        <h3>Student List</h3>
        <span className="count-badge">{students.length} students</span>
      </div>
      
      <div className="student-list">
        {students.map(student => (
          <StudentItem
            key={student.id}
            student={student}
            onToggleAttendance={onToggleAttendance}
            onRemoveStudent={onRemoveStudent}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
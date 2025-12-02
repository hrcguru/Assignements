import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import AttendanceStats from './components/AttendanceStats';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  // Initialize state with sample students
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", present: true },
    { id: 2, name: "Bob Smith", present: false },
    { id: 3, name: "Charlie Brown", present: true },
    { id: 4, name: "Diana Prince", present: true },
    { id: 5, name: "Edward Wong", present: false },
    { id: 6, name: "Fiona Chen", present: true },
    { id: 7, name: "George Miller", present: false }
  ]);

  const [filter, setFilter] = useState('All');

  // Toggle attendance status
  const toggleAttendance = (id) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  // Add new student
  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name,
      present: false // Default to absent
    };
    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  // Remove student
  const removeStudent = (id) => {
    setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
  };

  // Mark all as present
  const markAllPresent = () => {
    setStudents(prevStudents =>
      prevStudents.map(student => ({ ...student, present: true }))
    );
  };

  // Mark all as absent
  const markAllAbsent = () => {
    setStudents(prevStudents =>
      prevStudents.map(student => ({ ...student, present: false }))
    );
  };

  // Filter students based on selected filter
  const filteredStudents = students.filter(student => {
    if (filter === 'Present') return student.present;
    if (filter === 'Absent') return !student.present;
    return true; // 'All'
  });

  // Calculate statistics
  const totalStudents = students.length;
  const presentCount = students.filter(student => student.present).length;
  const absentCount = totalStudents - presentCount;
  const attendanceRate = totalStudents > 0 ? Math.round((presentCount / totalStudents) * 100) : 0;

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🎓 Attendance Manager</h1>
          <p>Track and manage student attendance efficiently</p>
        </div>
        <div className="header-badge">
          <span className="badge-text">Live</span>
        </div>
      </header>

      <main className="main-content">
        <div className="dashboard">
          <div className="left-panel">
            <StudentForm onAddStudent={addStudent} />
            <AttendanceStats
              total={totalStudents}
              present={presentCount}
              absent={absentCount}
              rate={attendanceRate}
              onMarkAllPresent={markAllPresent}
              onMarkAllAbsent={markAllAbsent}
            />
          </div>

          <div className="right-panel">
            <FilterBar
              currentFilter={filter}
              onFilterChange={setFilter}
              total={totalStudents}
              filtered={filteredStudents.length}
            />
            
            <StudentList
              students={filteredStudents}
              onToggleAttendance={toggleAttendance}
              onRemoveStudent={removeStudent}
            />
            
            {filteredStudents.length === 0 && (
              <div className="no-results">
                <p>No students found with the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>
          Total Students: {totalStudents} • 
          Present: {presentCount} • 
          Absent: {absentCount} • 
          Attendance Rate: {attendanceRate}%
        </p>
      </footer>
    </div>
  );
}

export default App;
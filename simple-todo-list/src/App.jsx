import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state with sample tasks
  const [tasks, setTasks] = useState([
    "Buy milk",
    "Study React",
    "Walk the dog",
    "Complete assignment"
  ]);
  
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  // Add a new task
  const handleAddTask = () => {
    // Validate input
    if (!newTask.trim()) {
      setError('Task cannot be empty');
      return;
    }
    
    if (tasks.includes(newTask.trim())) {
      setError('Task already exists');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Add the new task
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  // Remove a task by index
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTasks([]);
  };

  // Handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📝 Simple Todo List</h1>
        <p>Keep track of your daily tasks</p>
      </header>

      <main className="main-content">
        {/* Task Input Section */}
        <div className="input-section">
          <div className="input-group">
            <input
              type="text"
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter a new task..."
              className="task-input"
            />
            <button 
              onClick={handleAddTask}
              className="add-btn"
            >
              Add Task
            </button>
          </div>
          
          {error && <p className="error-message">⚠️ {error}</p>}
          
          {tasks.length > 0 && (
            <button 
              onClick={handleClearAll}
              className="clear-btn"
            >
              Clear All Tasks
            </button>
          )}
        </div>

        {/* Task List Section */}
        <div className="task-section">
          <h2>
            Your Tasks 
            <span className="task-count"> ({tasks.length})</span>
          </h2>
          
          {tasks.length === 0 ? (
            <div className="empty-state">
              <p className="empty-message">✅ No tasks available. Add a task to get started!</p>
            </div>
          ) : (
            <ul className="task-list">
              {tasks.map((task, index) => (
                <li key={index} className="task-item">
                  <span className="task-text">{task}</span>
                  <button 
                    onClick={() => handleRemoveTask(index)}
                    className="remove-btn"
                    aria-label="Remove task"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Stats Section */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-label">Total Tasks:</span>
            <span className="stat-value">{tasks.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Status:</span>
            <span className="stat-value">
              {tasks.length === 0 ? 'All Done!' : 'Tasks Pending'}
            </span>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Made with React and useState</p>
      </footer>
    </div>
  );
}

export default App;
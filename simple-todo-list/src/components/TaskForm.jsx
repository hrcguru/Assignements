import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!newTask.trim()) {
      setError('Task cannot be empty');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Add the new task
    onAddTask(newTask.trim());
    setNewTask('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="input-section">
      <form onSubmit={handleSubmit} className="input-group">
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
          type="submit"
          className="add-btn"
        >
          Add Task
        </button>
      </form>
      
      {error && <p className="error-message">⚠️ {error}</p>}
    </div>
  );
};

export default TaskForm;
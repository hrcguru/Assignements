import React, { useState } from 'react';
import '../styles/App.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }
    
    if (title.trim().length < 3) {
      setError('Task title must be at least 3 characters long');
      return;
    }
    
    setError('');
    addTask(title.trim(), priority);
    setTitle('');
    setPriority('Medium');
  };

  return (
    <div className="task-form-container">
      <h2>➕ Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="taskTitle">Task Title</label>
          <input
            type="text"
            id="taskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task description..."
            className="task-input"
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        
        <div className="form-group">
          <label>Priority</label>
          <div className="priority-options">
            {['High', 'Medium', 'Low'].map((p) => (
              <button
                key={p}
                type="button"
                className={`priority-btn ${priority === p ? 'active' : ''} ${p.toLowerCase()}`}
                onClick={() => setPriority(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
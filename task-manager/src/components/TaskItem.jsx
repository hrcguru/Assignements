import React from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, updateTaskPriority }) => {
  const priorityColors = {
    High: '#ff4757',
    Medium: '#ffa502',
    Low: '#2ed573'
  };

  const handlePriorityChange = (e) => {
    updateTaskPriority(task.id, e.target.value);
  };

  return (
    <div className={`task-item ${task.priority.toLowerCase()} ${task.completed ? 'completed' : ''}`}>
      <div className="task-item-header">
        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            id={`task-${task.id}`}
          />
          <label htmlFor={`task-${task.id}`}></label>
        </div>
        
        <div className="task-content">
          <h3 className={`task-title ${task.completed ? 'completed' : ''}`}>
            {task.title}
          </h3>
          <div className="task-meta">
            <span className="task-date">
              Added: {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="task-item-actions">
        <select
          value={task.priority}
          onChange={handlePriorityChange}
          className="priority-select"
          style={{ borderColor: priorityColors[task.priority] }}
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        
        <button
          onClick={() => deleteTask(task.id)}
          className="delete-btn"
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>

      <div 
        className="priority-indicator"
        style={{ backgroundColor: priorityColors[task.priority] }}
      />
    </div>
  );
};

export default TaskItem;
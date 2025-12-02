import React from 'react';

const TaskItem = ({ task, index, onRemove }) => {
  return (
    <li className="task-item">
      <div className="task-content">
        <span className="task-number">{index + 1}.</span>
        <span className="task-text">{task}</span>
      </div>
      <button 
        onClick={() => onRemove(index)}
        className="remove-btn"
        aria-label="Remove task"
        title="Remove task"
      >
        ×
      </button>
    </li>
  );
};

export default TaskItem;
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onRemoveTask, onClearAll }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-section">
        <h2>
          Your Tasks 
          <span className="task-count"> ({tasks.length})</span>
        </h2>
        
        <div className="empty-state">
          <p className="empty-message">✅ No tasks available. Add a task to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-section">
      <h2>
        Your Tasks 
        <span className="task-count"> ({tasks.length})</span>
      </h2>
      
      <ul className="task-list">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            onRemove={onRemoveTask}
          />
        ))}
      </ul>
      
      {tasks.length > 0 && (
        <button 
          onClick={onClearAll}
          className="clear-btn"
        >
          Clear All Tasks
        </button>
      )}
    </div>
  );
};

export default TaskList;
import React from 'react';
import TaskItem from './TaskItem';
import '../styles/App.css';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, updateTaskPriority }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>📝 No tasks found. Add a new task to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <h2>📋 Task List ({tasks.length})</h2>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            updateTaskPriority={updateTaskPriority}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
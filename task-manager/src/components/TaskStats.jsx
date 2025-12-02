import React from 'react';
import '../styles/App.css';

const TaskStats = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const highPriorityTasks = tasks.filter(task => task.priority === 'High').length;
  const mediumPriorityTasks = tasks.filter(task => task.priority === 'Medium').length;
  const lowPriorityTasks = tasks.filter(task => task.priority === 'Low').length;
  
  const completionRate = tasks.length > 0 
    ? Math.round((completedTasks / tasks.length) * 100) 
    : 0;

  return (
    <div className="stats-container">
      <h2>📊 Statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total Tasks</h3>
          <p className="stat-value">{tasks.length}</p>
        </div>
        
        <div className="stat-card completed">
          <h3>Completed</h3>
          <p className="stat-value">{completedTasks}</p>
        </div>
        
        <div className="stat-card progress">
          <h3>Completion Rate</h3>
          <p className="stat-value">{completionRate}%</p>
        </div>
      </div>
      
      <div className="priority-stats">
        <h3>Priority Distribution</h3>
        <div className="priority-bars">
          <div className="priority-bar high">
            <span>High</span>
            <div className="bar-container">
              <div 
                className="bar" 
                style={{ width: `${(highPriorityTasks / Math.max(tasks.length, 1)) * 100}%` }}
              />
            </div>
            <span>{highPriorityTasks}</span>
          </div>
          
          <div className="priority-bar medium">
            <span>Medium</span>
            <div className="bar-container">
              <div 
                className="bar" 
                style={{ width: `${(mediumPriorityTasks / Math.max(tasks.length, 1)) * 100}%` }}
              />
            </div>
            <span>{mediumPriorityTasks}</span>
          </div>
          
          <div className="priority-bar low">
            <span>Low</span>
            <div className="bar-container">
              <div 
                className="bar" 
                style={{ width: `${(lowPriorityTasks / Math.max(tasks.length, 1)) * 100}%` }}
              />
            </div>
            <span>{lowPriorityTasks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
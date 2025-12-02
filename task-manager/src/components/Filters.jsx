import React from 'react';
import '../styles/App.css';

const FILTER_OPTIONS = {
  ALL: 'All',
  COMPLETED: 'Completed',
  INCOMPLETE: 'Incomplete'
};

const Filters = ({ 
  priorityFilter, 
  setPriorityFilter, 
  statusFilter, 
  setStatusFilter,
  clearCompletedTasks 
}) => {
  return (
    <div className="filters-container">
      <div className="filters-header">
        <h2>🔍 Filters</h2>
        <button 
          onClick={clearCompletedTasks}
          className="clear-completed-btn"
        >
          Clear Completed
        </button>
      </div>
      
      <div className="filter-group">
        <label>Priority Filter</label>
        <div className="filter-buttons">
          {['All', 'High', 'Medium', 'Low'].map((priority) => (
            <button
              key={priority}
              className={`filter-btn ${priorityFilter === priority ? 'active' : ''}`}
              onClick={() => setPriorityFilter(priority)}
            >
              {priority}
            </button>
          ))}
        </div>
      </div>
      
      <div className="filter-group">
        <label>Status Filter</label>
        <div className="filter-buttons">
          {Object.values(FILTER_OPTIONS).map((status) => (
            <button
              key={status}
              className={`filter-btn ${statusFilter === status ? 'active' : ''}`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
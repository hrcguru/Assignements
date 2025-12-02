import React from 'react';
import '../App.css';

const FilterBar = ({ currentFilter, onFilterChange, total, filtered }) => {
  const filters = [
    { value: 'All', label: '👥 All Students', count: total },
    { value: 'Present', label: '✅ Present', color: 'green' },
    { value: 'Absent', label: '❌ Absent', color: 'red' }
  ];

  return (
    <div className="filter-bar">
      <div className="filter-header">
        <h3>Filter Attendance</h3>
        <span className="filter-count">
          Showing {filtered} of {total} students
        </span>
      </div>
      
      <div className="filter-options">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}
            style={filter.color ? { '--filter-color': filter.color } : {}}
          >
            <span className="filter-icon">{filter.label.split(' ')[0]}</span>
            <span className="filter-label">{filter.label.split(' ').slice(1).join(' ')}</span>
            {filter.count !== undefined && (
              <span className="filter-badge">{filter.count}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
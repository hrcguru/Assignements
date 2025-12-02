import React from 'react';
import '../App.css';

const AttendanceStats = ({ 
  total, 
  present, 
  absent, 
  rate,
  onMarkAllPresent,
  onMarkAllAbsent 
}) => {
  const presentPercentage = total > 0 ? Math.round((present / total) * 100) : 0;
  const absentPercentage = total > 0 ? Math.round((absent / total) * 100) : 0;

  return (
    <div className="stats-container">
      <h2>📊 Attendance Statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Total Students</h3>
            <p className="stat-value">{total}</p>
          </div>
        </div>
        
        <div className="stat-card present">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Present</h3>
            <p className="stat-value">{present}</p>
          </div>
        </div>
        
        <div className="stat-card absent">
          <div className="stat-icon">❌</div>
          <div className="stat-content">
            <h3>Absent</h3>
            <p className="stat-value">{absent}</p>
          </div>
        </div>
      </div>
      
      <div className="attendance-rate">
        <h3>Attendance Rate</h3>
        <div className="rate-display">
          <div className="rate-circle">
            <span className="rate-value">{rate}%</span>
          </div>
          <div className="rate-bar-container">
            <div className="rate-bar">
              <div 
                className="rate-fill present-fill"
                style={{ width: `${presentPercentage}%` }}
              />
              <div 
                className="rate-fill absent-fill"
                style={{ width: `${absentPercentage}%` }}
              />
            </div>
            <div className="rate-labels">
              <span>Present: {presentPercentage}%</span>
              <span>Absent: {absentPercentage}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bulk-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button 
            onClick={onMarkAllPresent}
            className="action-btn mark-present-btn"
          >
            ✅ Mark All Present
          </button>
          <button 
            onClick={onMarkAllAbsent}
            className="action-btn mark-absent-btn"
          >
            ❌ Mark All Absent
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStats;
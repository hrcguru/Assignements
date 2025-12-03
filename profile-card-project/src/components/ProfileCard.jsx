import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, age, bio }) => {
  // Set default values if props are not provided
  const displayName = name || "Anonymous User";
  const displayAge = age || "Unknown";
  const displayBio = bio || "No biography available for this user.";
  
  // Function to truncate bio if it exceeds 100 characters
  const truncateBio = (text) => {
    if (text.length <= 100) {
      return text;
    }
    return text.substring(0, 100) + "… Read More";
  };
  
  // Get initials for avatar
  const getInitials = (fullName) => {
    if (!fullName || fullName === "Anonymous User") return "AU";
    
    const names = fullName.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };
  
  // Generate a color based on the name for the avatar
  const getAvatarColor = (userName) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', 
      '#118AB2', '#EF476F', '#073B4C', '#7209B7'
    ];
    
    if (!userName || userName === "Anonymous User") return colors[0];
    
    const charCode = userName.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <div 
          className="avatar" 
          style={{ backgroundColor: getAvatarColor(displayName) }}
        >
          {getInitials(displayName)}
        </div>
        <div className="user-info">
          <h2 className="user-name">{displayName}</h2>
          <div className="user-age">
            <span className="age-label">Age:</span> {displayAge}
          </div>
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="section-title">About</h3>
        <p className="user-bio">{truncateBio(displayBio)}</p>
        
        {/* Show character count for bio */}
        <div className="bio-stats">
          <span className="bio-length">{displayBio.length} characters</span>
          {displayBio.length > 100 && (
            <span className="truncated-indicator">(truncated)</span>
          )}
        </div>
      </div>
      
      <div className="card-footer">
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">{Math.floor(displayName.length * 3.14)}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat">
            <span className="stat-value">{Math.floor(displayName.length * 2.5)}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{Math.floor(displayName.length * 1.8)}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set default props for functional component
ProfileCard.defaultProps = {
  name: "Anonymous User",
  age: "Unknown",
  bio: "No biography available for this user."
};

export default ProfileCard;
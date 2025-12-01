import React from 'react';
import './FeatureItem.css';

const FeatureItem = ({ children }) => {
  return (
    <li className="feature-item">
      <span className="checkmark">✓</span>
      {children}
    </li>
  );
};

export default FeatureItem;
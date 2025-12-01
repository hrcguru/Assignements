import React from 'react';
import './FeatureList.css';

const FeatureList = ({ children }) => {
  return <ul className="feature-list">{children}</ul>;
};

export default FeatureList;
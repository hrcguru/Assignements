import React from 'react';
import Button from '../Button/Button';
import FeatureList from '../FeatureList/FeatureList';
import './PricingCard.css';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonVariant = 'primary',
  buttonText = 'Get Started',
  popular = false 
}) => {
  return (
    <div className={`pricing-card ${popular ? 'popular' : ''}`}>
      {popular && <div className="popular-badge">Most Popular</div>}
      
      <div className="card-header">
        <h3 className="plan-title">{title}</h3>
        <p className="plan-description">{description}</p>
      </div>
      
      <div className="price-section">
        <span className="price">{price}</span>
        {price !== 'Free' && <span className="price-period">/month</span>}
      </div>
      
      <FeatureList>
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="checkmark">✓</span>
            {feature}
          </li>
        ))}
      </FeatureList>
      
      <Button variant={buttonVariant}>{buttonText}</Button>
    </div>
  );
};

export default PricingCard;
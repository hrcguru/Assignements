import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import './PricingSection.css';

const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "1 lorem ipsum",
        "Lorem, ipsum dolor.",
        "Monthly Updates"
      ],
      buttonVariant: "secondary"
    },
    {
      title: "Lorem Plus",
      price: "$32.00",
      description: "Great for small businesses",
      features: [
        "1 lorem ipsum",
        "Lorem, ipsum dolor.",
        "Monthly Updates",
        "Priority Support"
      ],
      popular: true
    },
    {
      title: "Lorem Pro",
      price: "$50.00",
      description: "For large scale businesses",
      features: [
        "1 lorem ipsum",
        "Lorem, ipsum dolor.",
        "Monthly Updates",
        "Priority Support",
        "Advanced Features"
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Right Plan for Your Business</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. 
            Facilis magnam, sed officiis commodi labore odit.
          </p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonVariant={plan.buttonVariant}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
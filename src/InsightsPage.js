import React from 'react';
import './InsightsPage.css';

const InsightsPage = () => {
  const insights = [
    "With movement and glucose data, gain predictive activity insights to optimize your daily routines and glucose stability.",
    "Correlate your HRV, Sleep, and Glucose metrics to uncover patterns in your recovery and metabolic performance.",
    "Detect early warning signs of metabolic imbalances and take action with personalized, real-time suggestions.",
    "Optimize your recovery and stress management with detailed insights into HRV and sleep patterns.",
    "Track your blood glucose trends and receive tailored activity recommendations to maintain optimal energy levels.",
    "Discover how your diet, movement, and rest interact to shape your overall health and wellness."
    // "Transform raw health data into actionable insights that support long-term metabolic and cardiovascular health."
  ];

  return (
    <div className="insights-page">
      <h1 className="insights-header">Personalized Insights</h1>
      <div className="insights-container">
        {insights.map((line, index) => (
          <div key={index} className="insight-item">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsPage;

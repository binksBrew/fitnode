import React, { useState } from "react";
import "./ArticlePage.css";

const articles = [
  {
    title: "Heart Rate Variability (HRV) and Glucose Metabolism",
    content: `
      HRV reflects autonomic nervous system activity and is linked to glucose regulation. Reduced HRV indicates impaired autonomic function, increasing risks of insulin resistance and type 2 diabetes. Monitoring HRV can help identify metabolic issues early and guide proactive health management.
    `,
    link: "/articles/hrv-glucose", // Add link for Learn More
  },
  {
    title: "Resting Heart Rate (RHR) and Cardiovascular Health",
    content: `
            RHR measures heartbeats per minute at rest and is key to cardiovascular fitness. Normal RHR ranges from 60–100 bpm; athletes often have lower rates. Elevated RHR increases cardiovascular risks, but lifestyle changes like exercise and stress management can improve it.

    `,
    link: "/articles/rhr-health",
  },
  {
    title: "Interconnection Between HRV, RHR, and Glucose Levels",
    content: `
            HRV, RHR, and glucose levels are interconnected. Hyperglycemia often reduces HRV, signaling autonomic dysfunction. Monitoring all three provides a holistic view of health, enabling tailored interventions for metabolic and cardiovascular conditions.

    `,
    link: "/articles/hrv-rhr-glucose",
  },
];

const ArticlePage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null); // State to track selected article

  const handleSelectArticle = (index) => {
    setSelectedArticle(selectedArticle === index ? null : index); // Toggle the dropdown
  };

  return (
    <div className="article-page">
      <h1 className="article-header">Articles</h1>
      <div className="dropdown-container">
        {articles.map((article, index) => (
          <div key={index} className="dropdown-item">
            <div
              className="dropdown-title"
              onClick={() => handleSelectArticle(index)} // Toggle dropdown on click
            >
              {article.title}
            </div>
            {selectedArticle === index && ( // Conditional rendering for dropdown content
              <div className="dropdown-content">
                <p>{article.content}</p>
                <a href={article.link} className="learn-more">
                  Learn More
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;

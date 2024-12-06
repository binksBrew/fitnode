import React from "react";
import "./TeamPage.css";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Prof. Boby George",
      education: "HOD, Medical Science & Engineering, IIT Madras. Advisor, expert in sensor interface electronics and biomedical instrumentation, providing invaluable guidance to our startup.",
      contact: "+1 123 456 7890",
      linkedin: "https://www.linkedin.com/in/boby-george-82090262/",
    },
    {
      name: "Kartik Thombare",
      education: "Electronics, Indian Institute of Technology Madras. Founder, driven by a deep passion for chips, AI, and hardware, uniquely positioned to revolutionize health tech through Jeelo.",
      contact: "+91 7972294961",
      linkedin: "https://www.linkedin.com/in/kartik-thombare-87a475297/",
    },
    {
      name: "Isha Sangpal",
      education: "Computer Science, Ratan Tata Maharashtra States Skills University, Pune. Co-Founder, expertise in AI, ML, and LLMs, mastering technologies in weeks and building impactful solutions in days.",
      contact: "+91 8766023472",
      linkedin: "https://www.linkedin.com/in/isha-sangpal-133593225",
    },
    {
      name: "Bob Brown",
      education: "Pursuing PhD in Artificial Intelligence.",
      contact: "+1 444 444 4444",
      linkedin: "https://linkedin.com/in/bobbrown",
    },
    {
      name: "Emma Wilson",
      education: "Pursuing B.A in Psychology.",
      contact: "+1 333 333 3333",
      linkedin: "https://linkedin.com/in/emmawilson",
    },
  ];

  return (
    <div className="team-container">
      <h1 className="page-title">Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <h2 className="card-title">{member.name}</h2>
            <p className="card-text">{member.education}</p>
            <p className="card-text">Contact: {member.contact}</p>
            <a
              href={member.linkedin}
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

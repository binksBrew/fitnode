import React from "react";
import styled from "styled-components";

const BioLoop = () => {
  return (
    <BioLoopContainer>
      <Section>
        <Title>Heart Rate Variability (HRV)</Title>
        <Description>
          HRV measures the variation in time between heartbeats. It indicates how well your body is managing stress and recovery.
        </Description>
        <ImageContainer>
          {/* Replace with your actual chart/image */}
          <img src="./assets/hrv-chart.png" alt="HRV Chart" />
        </ImageContainer>
        <Recommendations>
          <p>Recommendation: Maintain regular physical activity and manage stress levels.</p>
        </Recommendations>
      </Section>

      <Section>
        <Title>Resting Heart Rate (RHR)</Title>
        <Description>
          RHR reflects your cardiovascular health and fitness levels. A lower RHR typically indicates better health.
        </Description>
        <ImageContainer>
          {/* Replace with your actual chart/image */}
          <img src="./assets/rhr-chart.png" alt="RHR Chart" />
        </ImageContainer>
        <Recommendations>
          <p>Recommendation: Include more cardio exercises in your routine.</p>
        </Recommendations>
      </Section>

      {/* Repeat similar sections for SpO2, Blood Glucose, Body Composition, and Sleep Metrics */}
    </BioLoopContainer>
  );
};

export default BioLoop;

// Styled Components
const BioLoopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  background-color: #121212; /* Dark theme */
  color: white;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #00d1b2;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #dddddd;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;

const Recommendations = styled.div`
  background-color: #282828;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #00ffab;
`;

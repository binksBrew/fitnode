import React, { useCallback } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import EmailSignup from "./EmailSignUp";
import logo from "./assets/logo.svg"; // Import the logo.svg
import InsightsPage from "./InsightsPage"; // Import the InsightsPage
import ArticlePage from "./ArticlePage";
import HrvGlucosePage from "./HrvGlucosePage";
import RhrHealthPage from "./RhrHealthPage";
import HrvRhrGlucosePage from "./HrvRhrGlucosePage";
import TeamPage from "./TeamPage"; // Adjust the path as per your file structure
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Link and Router

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Correctly load the engine
  }, []);

  return (
    <Router>
      <AppContainer>
        {/* Add the Header */}
        <Header>
          <Logo>
            <Link to="/"> {/* Wrap the logo inside the Link component */}
              <img src={logo} alt="Logo" />
            </Link>
          </Logo>
          <Heading>a Personalised health companion coming your way!</Heading>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/BioLoop">BioLoop</Link>
            <Link to="/articles">Article</Link>
            <Link to="/team">Team</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Header>

        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#000", // Base color is black
              },
              image:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(75, 0, 130, 0.9) 72%, rgba(238, 130, 238, 0.8) 95%)",
              size: "cover",
            },
            particles: {
              color: { value: "#fff" },
              move: { enable: true, speed: 0.5 },
              number: { value: 900 },
              opacity: { value: 0.8 }, // Adjust transparency
              size: { value: { min: 0.2, max: 1.5 } },
            },
          }}
        />

        {/* Routing Section */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <Content>
                <h1>Be our early customer &gt;</h1>
                <p>Please enter your email below to stay updated</p>
                <InputContainer>
                  <EmailSignup />
                </InputContainer>
              </Content>
            }
          />
          {/* Insights Page Route */}
          <Route path="/BioLoop" element={<InsightsPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/articles/hrv-glucose" element={<HrvGlucosePage />} />
          <Route path="/articles/rhr-health" element={<RhrHealthPage />} />
          <Route path="/articles/hrv-rhr-glucose" element={<HrvRhrGlucosePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;

// Styled Components
const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Adjusted for header and content */
  justify-content: flex-start; /* Align items to start */
  background: linear-gradient(to bottom, #0f1e35, #35144f, #5a2b68, #873d84, #a65299);
`;

/* Header Section */
const Header = styled.header`
  position: relative;
  text-align: center;
  padding: 20px;
  color: white;
  z-index: 2;
`;

const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 25px;

  img {
    width: 50px; /* Slightly larger for better visibility */
    height: 50px;
  }
`;

const Heading = styled.h2`
  margin: 20px 0 10px 0; /* Adjusted to align visually */
  font-size: 1.8rem; /* Larger and more readable */
  font-weight: 400; /* Slightly bold for emphasis */
  font-family: "Arial", sans-serif;
  color: #f0f0f0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ff79c6;
    }
  }
`;

/* Content Section */
const Content = styled.div`
  position: relative;
  text-align: center;
  color: white;
  z-index: 1;
  margin-top: 70px; /* Added margin to push it below the header */

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-family: "Arial", sans-serif;
    color: #f8f8f8;
    animation: fadeIn 2s ease-in-out;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    font-family: "Arial", sans-serif;
    color: #ddd;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

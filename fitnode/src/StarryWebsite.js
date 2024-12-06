import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StarryWebsite = () => {
  return (
    <Container>
      <Stars />
      <Header>
        <Logo>✦</Logo>
        <HeaderText>
          a Personalised health companion coming your way!
        </HeaderText>
        <Navigation>
          <NavLink href="#bioloop">BioLoop &gt;</NavLink>
          <NavLink href="#team">Team &gt;</NavLink>
          <NavLink href="#about">About &gt;</NavLink>
        </Navigation>
      </Header>
      <Main>
        <CallToAction>Be our early customer &gt;</CallToAction>
        <EmailInput>
          <Input
            type="email"
            placeholder="please enter your email"
          />
          <SubmitButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            &gt;
          </SubmitButton>
        </EmailInput>
      </Main>
    </Container>
  );
};

export default StarryWebsite;

// Styled Components
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #1b1b2f, #162447);
  font-family: Arial, sans-serif;
  position: relative;
  color: white;
  overflow: hidden;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://source.unsplash.com/1600x900/?stars") repeat;
  background-size: cover;
  animation: moveStars 50s linear infinite;

  @keyframes moveStars {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -1000px 1000px;
    }
  }
`;

const Header = styled.header`
  text-align: center;
  margin-top: 50px;
  z-index: 2;
`;

const Logo = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeaderText = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;

  &:hover {
    color: #ff79c6;
  }
`;

const Main = styled.main`
  text-align: center;
  z-index: 2;
`;

const CallToAction = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-in-out;
`;

const EmailInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px 20px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  background: transparent;
  color: white;
  outline: none;

  &::placeholder {
    color: #ddd;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 10px 20px;
  border: 2px solid #ff79c6;
  background: transparent;
  border-radius: 20px;
  color: #ff79c6;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff79c6;
    color: white;
  }
`;

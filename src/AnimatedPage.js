import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimatedPage = () => {
  return (
    <Container>
      <Stars />
      <LogoContainer>
        <motion.img
          src="path-to-your-logo.png"
          alt="Logo"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </LogoContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          A Personalised health companion coming your way!
        </motion.h1>
        <Nav>
          <motion.a
            href="#bio"
            whileHover={{ scale: 1.1 }}
            style={{ textDecoration: "none" }}
          >
            BioLoop &gt;
          </motion.a>
          <motion.a
            href="#team"
            whileHover={{ scale: 1.1 }}
            style={{ textDecoration: "none" }}
          >
            Team &gt;
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            style={{ textDecoration: "none" }}
          >
            About &gt;
          </motion.a>
        </Nav>
      </Header>
      <Main>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Be our early customer &gt;
        </motion.h2>
        <InputContainer>
          <motion.input
            whileFocus={{
              borderColor: "#f09",
              boxShadow: "0 0 15px #f09",
            }}
            type="email"
            placeholder="please enter your email"
          />
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#f09" }}
            whileTap={{ scale: 0.9 }}
          >
            &gt;
          </motion.button>
        </InputContainer>
      </Main>
    </Container>
  );
};

export default AnimatedPage;

// Styled Components
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #1b1b2f, #162447);
  color: white;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
`;

const Stars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("path-to-stars-image.png") repeat;
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

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  img {
    width: 40px;
    height: 40px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-top: 50px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 25px;

  a {
    color: #d4d4d4;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #f09;
      transform: scale(1.1);
    }
  }
`;

const Main = styled.main`
  text-align: center;
  margin-top: auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input {
    padding: 10px 20px;
    border: 2px solid #fff;
    border-radius: 20px;
    background: transparent;
    color: white;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
      color: #ddd;
    }
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: #fff;
    color: #f09;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background: #f09;
      color: #fff;
    }
  }
`;

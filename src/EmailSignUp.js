

import React, { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import styled from "styled-components";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email!");

    try {
      await addDoc(collection(db, "emails"), { email });
      alert("Thank you for signing up!");
      setEmail(""); // Clear input field
    } catch (error) {
      console.error("Error saving email: ", error);
      alert("Something went wrong!");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="please enter your email"
        required
      />
      <SubmitButton type="submit">➤</SubmitButton>
    </FormContainer>
  );
};

export default EmailSignup;

// Styled Components
const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px 20px;
  border: 2px solid #ff79c6;
  border-radius: 30px;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #ddd;
    font-style: italic;
  }

  &:focus {
    border-color: #ff79c6;
    box-shadow: 0 0 10px rgba(255, 121, 198, 0.8);
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #ff79c6;
  border-radius: 30px;
  background: transparent;
  color: #ff79c6;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff79c6;
    color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

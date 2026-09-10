import React from "react"; 
import styled from "styled-components";
import FounderStory from "../components/FounderStory.jsx";

const HeaderText = styled.h1`
  color: #007bff;
  font-size: 2rem;
  text-align: center;
`;
const FounderCountainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

function About () {
    return (
      <>
        <HeaderText>Our Story</HeaderText>
        <FounderCountainer>
          <FounderStory />
        </FounderCountainer>
      </>
    );
}

export default About;   

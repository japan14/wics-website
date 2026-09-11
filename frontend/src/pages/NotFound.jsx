import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.main`
  flex: 1;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
`;

const Code = styled.p`
  color: #1976d2;
  font-size: 4rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h1`
  color: #1976d2;
  font-size: 2rem;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Message = styled.p`
  color: #555;
  font-size: 1.1rem;
  max-width: 520px;
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const HomeLink = styled(Link)`
  background-color: #1976d2;
  color: #ffffff;
  font-weight: 500;
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  border: 2px solid #1976d2;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0d47a1;
    border-color: #0d47a1;
    color: #ffffff;
  }
`;

const SecondaryLink = styled(Link)`
  color: #1976d2;
  font-weight: 500;
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  border: 2px solid #1976d2;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e3f2fd;
    color: #0d47a1;
  }
`;

function NotFound() {
  return (
    <Page>
      <Code>404</Code>
      <Title>Page not found</Title>
      <Message>
        This page is not available yet, or the link may be incorrect. Head back
        home or visit a page that is live.
      </Message>
      <Actions>
        <HomeLink to="/">Back to Home</HomeLink>
        <SecondaryLink to="/about">About</SecondaryLink>
        <SecondaryLink to="/eboard">Eboard</SecondaryLink>
      </Actions>
    </Page>
  );
}

export default NotFound;

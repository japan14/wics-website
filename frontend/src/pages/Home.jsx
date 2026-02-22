import React from "react";
import styled from "styled-components";
import Slideshow from "../components/Slideshow";

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

const HomeHeader = styled.h1`
  font-weight: 600;
  text-align: center;
  color: #1976d2;
  font-size: 2.5rem;
  margin: 3rem 0 1rem 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
const Subtitle = styled.p`
  text-align: center;
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
const ActionTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Tile = styled.a`
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(25, 118, 210, 0.3);

    &::before {
      opacity: 1;
    }

    h3,
    p {
      color: white;
      position: relative;
      z-index: 1;
    }
  }
`;

const TileTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
`;

const TileDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  transition: color 0.3s ease;
`;

function Home() {
  return (
    <>
      <HomeContainer>
        <ContentWrapper>
          <Slideshow />
          <HomeHeader>
            Morgan State University Women in Computer Science{" "}
          </HomeHeader>
          <Subtitle>
            Empowering women in technology through community, education, and
            professional development.
          </Subtitle>

          <ActionTileContainer>
            <Tile href="/interest-form">
              <TileTitle>Interest Form</TileTitle>
              <TileDescription>
                Join our community! Fill out our interest form to stay updated
                on events and opportunities.
              </TileDescription>
            </Tile>

            <Tile href="/about">
              <TileTitle>Get to Know WiCS</TileTitle>
              <TileDescription>
                Learn about our mission, values, and the amazing community we've
                built at MSU.
              </TileDescription>
            </Tile>

            <Tile href="/sponsors">
              <TileTitle>Call to Sponsors</TileTitle>
              <TileDescription>
                Partner with us! Support women in tech and help us create
                lasting impact.
              </TileDescription>
            </Tile>
          </ActionTileContainer>
        </ContentWrapper>
      </HomeContainer>
    </>
  );
}
export default Home;

import React from "react";
import styled from "styled-components";
import eboardData from "../data/eboard.json"
import { FaLinkedin}from "react-icons/fa";

const EboardTitle = styled.h1`
  text-align: center;
  color: #1976d2;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;
const EboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  min-height: 100vh;
`;
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const MemberCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const EboardImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #9ea186ff;
  transition: transform 0.3s ease;
`;
const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;
const Name = styled.h3`
  color: #1976d2;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
`;
const Position = styled.p`
  color: #555;
  font-size: 1rem;
  margin: 0.5rem 0 0 0;
  font-weight: 500;
  line-height: 1.4;
`;
const SocialIcon = styled.a`
  color: #566246;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #a5b9d7ff;
    transform: translateY(-3px);
  }
`;

function Eboard (){
    return (
      <EboardContainer>
        <EboardTitle>Meet the 2025 - 2026 Executive Board</EboardTitle>
        <Board>
            {eboardData.map((eboardData, index) => (
          <MemberCard key={index}>
            <EboardImg src={eboardData.image} alt={eboardData.name} />
            <NameContainer>
                <Name>{eboardData.name}</Name>
                <SocialIcon href={eboardData.linkedin} target="_blank">
              <FaLinkedin />
            </SocialIcon>
            </NameContainer>
            <Position>{eboardData.position}</Position>
          </MemberCard>
            ))}
        </Board>
      </EboardContainer>
    );
}
export default Eboard 

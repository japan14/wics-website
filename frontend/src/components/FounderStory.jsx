import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const StoryContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
`;
const ParagraphFounder = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  line-height: 1.8;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const HistoryContainer = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
`;
const Storyheading = styled.h3`
  color: #1976d2;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
const FounderContainer = styled.div`
  padding: 3rem 1rem;
  margin: 0 auto;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e3f2fd 100%);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const FounderTitle = styled.h4`
  color: #1976d2;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
`;
const FounderGrid = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FounderCard = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(25, 118, 210, 0.25);
  }
  `;
  const FounderImage = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 4px solid #1976d2;
    transition: transform 0.3s ease;

    ${FounderCard}:hover & {
      transform: scale(1.05);
    }
  `;

  const FounderName = styled.h5`
    color: #1976d2;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0.5rem 0;
    text-align: center;
  `;

  const FounderRole = styled.p`
    color: #555;
    font-size: 1rem;

    text-align: center;
    font-weight: 500;
  `;

  const LinkedInLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #1976d2;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.6rem 1.5rem;
    border: 2px solid #1976d2;
    border-radius: 25px;
    transition: all 0.3s ease;
    margin-top: 0.5rem;

    &:hover {
      background-color: #1976d2;
      color: white;
      transform: scale(1.05);
    }
  `;

  const LinkedInIcon = styled(FaLinkedin)`
    font-size: 1.2rem;
  `;

const FounderData = [
  {
    id: 1,
    name: "Chelsea Amihere",
    grad: "Class of 2023",
    role: "SWE - Northrop Grumman",
    image: "/images/eboard/Chelsea-A.png",
    linkedin: "https://www.linkedin.com/in/chelseaamihere/",
  },
  {
    id: 2,
    name: "Abigail Dina",
    grad: "Class of 2023",
    role: "PM - The Boeing Company",
    image: "/images/eboard/Abigail.png",
    linkedin: "https://www.linkedin.com/in/abigailodina/",
  },
];
function FounderStory (){
    return (
      <StoryContainer>
        <ContentWrapper>
        <HistoryContainer>
          <ParagraphFounder>
            Our journey started in March 2020 by two brilliant minds who
            believed in the power of women in technology. {""}
            Today, we honor their legacy by continuing to build a inclusive community that provides
            mentorship, professional development, and networking opportunities
            for all women in technology.
          </ParagraphFounder>

        </HistoryContainer>

        <FounderContainer>
          <FounderTitle>Meet Our Founders</FounderTitle>
          <FounderGrid>
            {FounderData.map((founder) => (
              <FounderCard key={founder.id}>
                <FounderImage src={founder.image} alt={founder.name} />
                <FounderName>{founder.name}</FounderName>
                <FounderRole>{founder.grad}</FounderRole>
                <FounderRole>{founder.role}</FounderRole>
                <LinkedInLink
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${founder.name}'s LinkedIn profile`}
                >
                  <LinkedInIcon />
                  Connect
                </LinkedInLink>
              </FounderCard>
            ))}
          </FounderGrid>
        </FounderContainer>
        </ContentWrapper>
      </StoryContainer>
    );

}

export default FounderStory;
import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #e3f2fd;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-top: 2px solid #90caf9;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const OrgName = styled.h3`
  color: #1976d2;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: #1976d2;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #0d47a1;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin: 0;
`;


function Footer (){
    return (
      <FooterContainer>
        <FooterContent>
          <OrgName>MSU WiCS</OrgName>
          <SocialLinks>
            <SocialIcon
              href="https://www.instagram.com/morganstatewics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/msu-wics/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon
              href="mailto:morganstatewics@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterContent>
        <Copyright>
          © {new Date().getFullYear()} MSU Women in Computer Science. All Rights
          Reserved.
        </Copyright>
      </FooterContainer>
    );
}

export default Footer
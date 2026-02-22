import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #e3f2fd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #1976d2;
  font-weight: 500;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0d47a1;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 2rem;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function Navbar() {
    const logo = "/images/wics-logo.png";

  return (
    <NavbarContainer>
      <NavLinks>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/eboard">Eboard</NavLink>
        </li>
        <li>
          <NavLink to="/news">WiCS News</NavLink>
        </li>
      </NavLinks>

      <LogoLink to="/">
        <Logo src={logo} alt="WiCS Circular Logo" />
      </LogoLink>

      <NavLinks>
        <li>
          <NavLink to="/sponsors">Our Sponsors</NavLink>
        </li>
        <li>
          <NavLink to="/resource">Resource Hub</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
}
export default Navbar;
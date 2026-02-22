import React,{useState} from "react";
import styled from "styled-components";
import slideData from '../data/slideshow.json'

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
`;
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background-color: #f5f5f5;
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
`;
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  color: #1976d2;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:hover {
    background-color: #1976d2;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  ${(props) =>
    props.$position === "left" &&
    `
    left: -25px;
  `}

  ${(props) =>
    props.$position === "right" &&
    `
    right: -25px;
  `}

  @media (max-width: 768px) {
    ${(props) =>
      props.$position === "left" &&
      `
      left: 10px;
    `}
    ${(props) =>
      props.$position === "right" &&
      `
      right: 10px;
    `}
  }
`;
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1.5rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #1976d2;
  background-color: ${(props) => (props.$active ? "#1976d2" : "white")};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.3);
    background-color: #1976d2;
  }
`;


function Slideshow(){
    const [currentIndex, setCurrentIndex] = useState(0);
    if (!slideData || slideData.length === 0) {
      return <SlideshowContainer>Loading Slides...</SlideshowContainer>;
    }
    const nextSlide  = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
    };
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return (
      <SlideshowContainer>
        <SlideContainer>
          <SlideImage
            src={slideData[currentIndex].image}
            alt={slideData[currentIndex].caption}
          />
        </SlideContainer>
        <NavButton
          $position="left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </NavButton>
        <NavButton
          $position="right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </NavButton>
        <DotsContainer>
        {slideData.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
      </SlideshowContainer>
    );
}
export default Slideshow

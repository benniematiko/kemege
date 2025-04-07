import React from "react";
import {
  AboutContent,
  DarkCircle,
  GradientCirlce,
  ImageContainer,
  StyledAboutSection,
  StyledEmoji,
  StyledHeading,
  StyledImage,
} from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.sty;ed";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection>
        <ImageContainer>
          <StyledImage src="./images/logo.jpg" alt="kemege" />
          <DarkCircle />
          <GradientCirlce />
        </ImageContainer>

        <AboutContent>
          <StyledHeading>
            Habari, ndugu zangu <StyledEmoji>🖐</StyledEmoji>!
          </StyledHeading>
          <p>
            I'm passionate about decision-making. I really like to see a reason
            behind every action
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptates incidunt repudiandae iusto fugit voluptatem voluptas
            quos. Eius provident, optio facilis consectetur pariatur sapiente!
            Quaerat error illo magni fugiat amet!
          </p>
          <CTAButton>Make an Appointment with Me</CTAButton>
        </AboutContent>
      </StyledAboutSection>
    </>
  );
};

import { FaArrowDown, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { CTAButton } from "../styles/common/CTAButton.sty;ed";
import {
  HeroContent,
  HeroSocialIcons,
  SocialIcon,
  StyledArrowDown,
  StyledHeroSection,
} from "../styles/sections/HeroSection.styled";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <HeroContent>
        <h1>A Leader . Family Man . Community Mobilizer</h1>
        <div>
          <CTAButton href="#projects">Community Projects</CTAButton>
          <CTAButton href="#pwds" primary margin="0 0 0 20px">
            Support for PWDs
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="#" target="_blank">
          <FaTwitter/>
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <FaFacebook/>
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <FaInstagram/>
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};

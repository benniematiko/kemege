import { FaPeopleGroup } from "react-icons/fa6";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServicesSection.styled";
import { FaBrain, FaCoins } from "react-icons/fa";

export const ServicesSection = () => {
  return (
    <StyledServicesSection id="services">
      <SectionHeading>
        <h1>Services in The Community</h1>
        <p>Always a pleasure serving the community</p>
      </SectionHeading>
      <ServicesItems>
        <SingleService>
          <IconWrapper>
            <FaCoins />
          </IconWrapper>
          <h1>PWDs Support</h1>
          <p> We love PWDs. We support them always</p>
        </SingleService>
        <SingleService>
          <IconWrapper>
            <FaBrain />
          </IconWrapper>
          <h1>Education for Students</h1>
          <p> We love PWDs. We support them always</p>
        </SingleService>
        <SingleService>
          <IconWrapper>
            <FaPeopleGroup />
          </IconWrapper>
          <h1>Community Mobilization</h1>
          <p> We love PWDs. We support them always</p>
        </SingleService>
      </ServicesItems>
    </StyledServicesSection>
  );
};

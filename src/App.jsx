import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/styles/Globals.styled";
import { NavBar } from "./components/layout/NavBar";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { Container } from "./components/styles/common/Container.styled";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { EventsSection } from "./components/sections/EventsSection";

import { FooterSection } from "./components/sections/FooterSection";
import { CopyrightSection } from "./components/sections/CopyrightSection";

const App = () => {
  // We create a theme heree, such as common colors

  const theme = {
    colors: {
      white: "rgba(249, 247,255, 1)",
      navyBlue: "rgba(2,12,27,1)",
      lightNavyBlue: "rgba(4,22,48,1)",
      green: "rgba(0,206, 158, 1)",
      orange: "rgba(249, 105, 14,1)",
      purple: "rgba(102, 51,153,1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <HeroSection />
        <Container>
          <EventsSection />
          <AboutSection />
          <ProjectsSection />
          <ServicesSection />
          <FooterSection />
        </Container>
        <CopyrightSection />
      </ThemeProvider>
    </>
  );
};

export default App;

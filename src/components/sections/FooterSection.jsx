import {
  AboutMe,
  Campaigns,
  CommunityService,
  Soccer,
  StyledFooter,
} from "../styles/sections/FooterSection.styled";

export const FooterSection = () => {
  return (
    <>
      <StyledFooter>
        <AboutMe>
          <h1>About Me</h1>

          <a href=""> About Me</a>
          <a href=""> Professional Work</a>
        </AboutMe>

        <CommunityService>
          <h1>Community Service</h1>

          <a href="">Youth Volunteers</a>
          <a href="">Donations to community</a>
        </CommunityService>

        <Campaigns>
          <h1>Meet The People Tours</h1>
          <a href="">Village Meetings</a>
          <a href="">Professional Meetings</a>
        
        </Campaigns>
        <Soccer>
          <h1>Soccer Challenges</h1>
          <a href="">Dates & Events</a>
         
        </Soccer>
      </StyledFooter>
    </>
  );
};

import styled from "styled-components";

export const StyledFooter = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 10rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }
`;
export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  a {
    padding: 6px 0;
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: 16px;

    &:hover {
      text-decoration: underline;
      margin-bottom: 0.5rem;
    }
  }
`;
export const Campaigns = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  a {
    padding: 6px 0;
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: 16px;

    &:hover {
      text-decoration: underline;
      margin-bottom: 0.5rem;
    }
  }
`;
export const CommunityService = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  a {
    padding: 6px 0;
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: 16px;

    &:hover {
      text-decoration: underline;
      margin-bottom: 0.5rem;
    }
  }
`;
export const Soccer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  a {
    padding: 6px 0;
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: 16px;

    &:hover {
      text-decoration: underline;
      margin-bottom: 0.5rem;
    }
  }
`;

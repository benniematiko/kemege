import styled from "styled-components";

export const StyledProjectSection = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 10rem 0;
`;

export const SingleProject = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
    margin-bottom: 10rem 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    

    &:nth-child(even) {
      flex-direction: column;
      
    }
  }
`;

export const ProjectImageContainer = styled.a`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  img {
    width: 90%;
  }
`;
export const ProjectDescription = styled.div`
  flex: 1;

  h1 {
    font-size: 2rem;
    margin-bottom:2rem;
    background: linear-gradient(
      to right,
      ${({ theme })=>theme.colors.orange}0%,
      ${({ theme })=>theme.colors.purple}50%,
      ${({ theme })=>theme.colors.orange}100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.4rem;
    text-align: justify;
    width: 78%;
  }

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin: 2rem 2rem 2rem 0;
      font-size: 1.2rem;

      svg {
        margin-right:0.5rem;
      }
    }
  }
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  span {
    display: inline-block;
    background:#0e213c;
    margin-bottom: 0.5rem;
    padding: 7px;
    border-radius: 5px;
    font-size: 14px;
    margin-right: 0.5rem;

  }
`;

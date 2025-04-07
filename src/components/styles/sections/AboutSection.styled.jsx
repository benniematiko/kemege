import styled, { keyframes } from "styled-components";

const rotate = keyframes`

  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
  

`

const wave = keyframes`
  0%{
    transform: rotate(0deg)
  }
  10%{
    transform: rotate(14deg)
  }
  20%{
    transform: rotate(-8deg)
  }
  30%{
    transform: rotate(14deg)
  }
  40%{
    transform: rotate(-4deg)
  }
  50%{
    transform: rotate(10deg)
  }
  60%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(0deg)
  }
`

export const StyledAboutSection = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 2.5rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 4rem;
  }
`;
export const StyledImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
`;
export const GradientCirlce = styled.div`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  position: absolute;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.orange} 0%,
    ${({ theme }) => theme.colors.green} 50%,
    ${({ theme }) => theme.colors.purple} 100%
  );
  animation: ${ rotate } 5s linear infinite;
  z-index: 2;
`;
export const DarkCircle = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  position: absolute;
  background: ${({ theme }) => theme.colors.navyBlue};
  z-index: 3;
`;

export const AboutContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  padding-right: 60px;

  p {
    font-size: 1.4rem;
    text-align: justify;
    margin-bottom: 1.45rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
    font-size: 1.2rem;
    
  }
  }
`;
export const StyledHeading = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const StyledEmoji = styled.span`
display: inline-block;
  animation: ${ wave } 3s infinite;

`

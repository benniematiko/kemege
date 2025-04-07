import styled, { keyframes } from "styled-components";

const navItemFade = keyframes`
from{
  opacity: 0;
  transform: translate(50px)

}
to{
  opacity: 1;
  transform: translate(0px)

}

`;

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 60px;
  z-index: 98;
  transition: all 0.15s ease-in;
  /* background-color: rgba(2, 12, 27, 0.8); */

  a {
    /* color: ${({ theme }) => theme.colors.navyBlue};  */
    color: ${({ theme }) => theme.colors.navyBlue};

    h1 {
      font-size: 1.9rem;
      letter-spacing: 2px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.orange};  
    }

    p {
      font-style: bold;
      letter-spacing: 3px;
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  padding: 0.7rem;
  border-radius: 5px;
  background: ${({ theme, menuOpen }) =>
    menuOpen ? "none" : theme.colors.lightNavyBlue};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  position: absolute;
  right: 60px;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
    
  }
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(225, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(2) " : "none"};
`;

export const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(225, 255, 255, 1) 100%
  );
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : "1")};
  transition: ${({ theme }) => theme.transition};
`;

export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? 0 : "15px")};
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(225, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) translate(-5px, -6px) scaleX(2) " : "none"};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* font-size: 14px; */
  font-size: 16px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* display: inline-block; */
    width: 24rem;
    height: 100vh;
    /* background: ${({ theme }) => theme.colors.lightNavyBlue}; */
    background-color: #6e879c;
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;

    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;
export const NavItemStyled = styled.li`
  margin: 0.2rem 0.7rem;
  list-style: none;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    animation: ${navItemFade} 0.5s ease forwards;
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  /* color: ${({ theme }) => theme.colors.white}; */
  color: ${({ theme }) => theme.colors.navyBlue};
  list-style: none;
  letter-spacing: 1.5px;

  &::after {
    content: "";
    width: 0%;
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.colors.orange};
    margin-top: 6px;
    transition: all 0.15s ease-in;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      display: block;
      height: 9rem;
      width: 9rem;
      border-radius: 50%;
      margin: 2rem 0;
    }
  }
`;

export const SocialIcons = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;

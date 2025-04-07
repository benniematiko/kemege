import { useState } from "react";
import {
  LineOne,
  LineThree,
  LineTwo,
  MenuIcon,
  Nav,
  NavItemStyled,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { NavItems } from "../../data/NavItems";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CTAButton } from "../styles/common/CTAButton.sty;ed";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <div>
          <a href="#hero-section">
            <h1>Hon Kemege Tyson</h1>
            <p>Serving people is my calling</p>
            {/* <img src="" alt="" /> */}
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled key={index} index={index} menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
                {
                  navItem.isProfile ? (
                    <NavLink href= "#hero-section">

                      <Profile>
                        <img src="./images/logo.jpg" alt="profile-pic"/>
                        <span>Hon K.T.</span>
                      </Profile>
                      
                    </NavLink>
                  ): null 
                }

                {
                  navItem.text ? ( 
                    <NavLink href={navItem.href}>{navItem.text}</NavLink>
                  ) : null
                }

                {
                  navItem.hasSocialIcons ? (

                    <SocialIcons>
                      <NavLink href="#facebook" target="_blank">
                        <FaFacebook />
                      </NavLink>
                      <NavLink href="#twitter" target="_blank">
                        <FaTwitter />
                      </NavLink>
                      <NavLink href="#instagram" target="_blank">
                        <FaInstagram />
                      </NavLink>
                    </SocialIcons>
                  ) : null
                }

                {
                  navItem.hasCTA ? (
                    <CTAButton href="#" target="_blank">
                      Download Community Activities (PDF)
                    </CTAButton>
                  ) : null
                }
               
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

import styled from "styled-components"

export const SectionHeading =  styled.div`
  text-align: center;
  margin-bottom: 7rem;

  h1 {
    text-transform: uppercase;
    display: inline-block;
    font-size: 2rem;
    margin: 0.5rem 0 1.5rem 0;
    position: relative;

    &::after {
      content: "";
      width: 50%;
      display: block;
      height: 2px;
      background:${({ theme}) => theme.colors.purple };
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;


    }
  }

  p {
    font-size: 16px;
    margin-bottom: 5rem;

  }

  @media( max-width:  ${({ theme }) => theme.mobile}){
    text-align: left;

  }
`
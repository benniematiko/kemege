import { createGlobalStyle  } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* font-family: "Share Tech Mono", monospace; */
    scroll-behavior: smooth;
    /* color: ${( { theme }) => theme.colors.white }; */
    color: ${( { theme }) => theme.colors.navyBlue }; 
    
    /* background: ${( { theme }) => theme.colors.navyBlue };  */
    background: #f0f8ff;
   
    font-size: 12px;
   
  }

  /* body {
    height: 200vh;
  } */

  a {
    text-decoration: none;
    color: ${( { theme }) => theme.colors.green };
    transition: all 250ms ease-in;

    &:hover{
      color:  ${( { theme }) => theme.colors.orange };
    }
  }

  /* Custom scrollbar */

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #7a8ba9;
  }
  ::-webkit-scrollbar-thumb {
    background: #31435f;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #202e46;
    
  }

`


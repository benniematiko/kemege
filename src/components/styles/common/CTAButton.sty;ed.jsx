import styled from "styled-components";

export const CTAButton = styled.a`
  background: ${({ primary, theme }) =>
    primary ? theme.colors.orange : "none "};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.orange};
  padding: 10px 20px;
  margin: ${({ margin }) => margin};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  font-size: 16px;
  /* font-family: "S" */
  font-weight: 500;
  cursor: pointer;
  display: inline-block;

  &:hover {
    /* background: ${({ primary, theme }) =>
      primary ? theme.colors.navyBlue : "none "}; */
    background: transparent;
    color: ${({ primary, theme }) =>
      primary ? theme.colors.white : theme.colors.orange };
        border: 1px solid ${({ theme }) => theme.colors.orange };
  }
`;

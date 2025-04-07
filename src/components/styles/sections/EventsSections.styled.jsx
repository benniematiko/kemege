import styled from "styled-components";

export const StyledEventsSection = styled.section`
  width: 100%;
  min-height: 90vh;
  padding: 10rem 0;
`;

export const EventWrapper = styled.div`
  display: flex;


  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const EventListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 50vh;
`;

export const SeeAllEvents = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;


  p {
    font-size: 1.4rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1.4rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.15s ease-in;
    background: ${({ theme }) => theme.colors.navyBlue}; 
    color: ${({ theme }) => theme.colors.orange}; 

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.orange};
      background-color: transparent;
    }
  }
`;

export const EventDetails = styled.div`
  flex: 1;
  width: 100%;
  padding: 12px ; 
  transition: background 0.15s ease-in;
  padding-left: 0 0 12px 12px;
  

  &:hover {
    background: ${({ theme }) => theme.colors.navyBlue}; 
    color: ${({ theme }) => theme.colors.white}; 
  }

  h1 {
    padding: 8px 0;
    border-top: 1px solid #ccc;
  }

  p {
    padding: 8px 0;
    font-size: 16px;
  }


`;

export const EventImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: start;

  img {
    width: 80%;
  }
`;
export const EventReadMore = styled.a`
  background: ${({ theme }) => theme.colors.orange};
  padding: 10px 20px;
  font-size: 16px;
  color:${({ theme }) => theme.colors.white};
  padding-bottom: 12px;
  width: 90%;

  &:hover {
    color:${({ theme }) => theme.colors.white};
    

  }
  

`;



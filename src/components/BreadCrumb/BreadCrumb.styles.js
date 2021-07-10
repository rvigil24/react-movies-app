import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--medGrey);
  color: white;
`;

export const Content = styled.div`
  max-width: var(---maxWidth);
  width: 100%;
  display: flex;
  padding: 0 2rem;

  span{
      font-size: var(--fontMed);
      color: white;
      padding-right: 1rem;

      @media screen and (max-width: 768px){
          font-size: var(--fontMed);
      }
  }
`;

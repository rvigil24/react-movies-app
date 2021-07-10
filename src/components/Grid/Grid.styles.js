import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: var(--maxWidth);
  padding: 0 2rem;

  h1 {
    color: var(--medGrey);
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

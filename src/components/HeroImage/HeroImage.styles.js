import styled from "styled-components";

export const Wrapper = styled.div`
  height: 70vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  position: relative;
  animation: animateHeroImage 1s;
    
  @keyframes animateHeroImage {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 2rem;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  position: absolute;
  max-width: 70rem;
  min-height: 10rem;
  bottom: 4rem;
  margin-right: 2rem;
  z-index: 10;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;

  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

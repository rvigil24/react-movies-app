import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  background: var(--darkGrey);
  padding: 0 2rem;
`;
export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 5.5rem;
  margin: 0 auto;
  border-radius: 4rem;
  color: var(--white);
  background: var(--medGrey);
  img {
    position: absolute;
    left: 1.5rem;
    top: 1.4rem;
    width: 3rem;
  }

  input {
    font-size: 2.8rem;
    position: absolute;
    left: 0;
    margin: 0.8rem 0;
    padding: 0 0 0 6rem;
    border: 0;
    background: transparent;
    height: 4rem;
    width: 95%;
    color: var(--white);
  }
`;

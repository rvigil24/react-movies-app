import styled from "styled-components";

export const Spinner = styled.div`
  margin: 2rem auto;
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

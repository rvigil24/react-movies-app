import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 72rem;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 2rem;
  animation: animateThumbnail 2s;

  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  :hover {
    opacity: 0.8;
  }
`;

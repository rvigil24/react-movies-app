import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

//images
import SomethingWrongImg from "../images/something-wrong.png";

const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  img {
    width: 75px;
    margin: 0 auto;
  }
  h1 {
    font-size: var(--fontSuperBig);
    color: var(--darkGrey);
  }
  h2 {
    margin-top: 1.5rem;
    font-size: var(--font);
    a {
      text-decoration: none;
      color: fuchsia;
    }
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Content>
        <img src={SomethingWrongImg} alt="something went wrong" />
        <h1>Page not found</h1>
        <h2>
          <Link to="/">Go back home</Link>
        </h2>
      </Content>
    </Wrapper>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";

import ReactLogo from "../../images/react-movie-logo.svg";
import TmdbLogo from "../../images/tmdb_logo.svg";

import { Wrapper, TMDBLogoImg, Content, ReactLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <ReactLogoImg src={ReactLogo} alt="app logo" />
        </Link>
        <TMDBLogoImg src={TmdbLogo} alt="TMDB logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;

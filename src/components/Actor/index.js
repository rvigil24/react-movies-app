import React from "react";
import PropTypes from "prop-types";

//styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imgUrl }) => {
  return (
    <Wrapper>
      <Image src={imgUrl} alt="Actor Thumbnail" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default Actor;

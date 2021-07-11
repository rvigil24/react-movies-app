import React from "react";

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

export default Actor;

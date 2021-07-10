import React from "react";
import { Link } from "react-router-dom";

//styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <Image src={image} alt="Movie thumbnail" />
        </Link>
      ) : (
        <Image src={image} alt="Movie thumbnail" />
      )}
    </div>
  );
};

export default Thumb;

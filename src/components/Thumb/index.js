import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;

import React from "react";
import PropTypes from "prop-types";

//styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

//components
import Thumb from "../Thumb";

//configuration
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//no image
import NoImage from "../../images/no_image.jpg";

const MovieInfo = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="Movie thumbnail"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTORS</h3>
              {movie?.directors?.map((dir) => (
                <p key={dir.credit_id}>{dir.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;

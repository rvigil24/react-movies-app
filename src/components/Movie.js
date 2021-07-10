import React from "react";

//config
// import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components
// import Spinner from "./Spinner";

//no image fallback
// import NoImage from "../images/no_image.jpg";

//hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = ({ match: { params } }) => {
  const { movieId } = params;
  const { state, loading, error } = useMovieFetch(movieId);
  console.log(state)
  if(loading) return <></>
  if(error) return <div>Something went wrong</div>;

  return (
    <>
      
    </>
  );
};

export default Movie;

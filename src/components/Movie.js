import React from "react";

//config
// import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";

//no image fallback
// import NoImage from "../images/no_image.jpg";

//hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = ({ match: { params } }) => {
  const { movieId } = params;
  const { state, loading, error } = useMovieFetch(movieId);
  console.log(state);
  if (loading)
    return (
      <>
        <Spinner />
      </>
    );
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <BreadCrumb movieTitle={state.original_title} />
    </>
  );
};

export default Movie;

import React from "react";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components
import Spinner from "./Spinner";
import SomethingWentWrong from "./SomethingWentWrong";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
import Grid from "./Grid";

//no image fallback
import NoImage from "../images/no_image.jpg";

//hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = ({ match: { params } }) => {
  const { movieId } = params;
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading)
    return (
      <>
        <Spinner />
      </>
    );
  if (error)
    return (
      <>
        <SomethingWentWrong />
      </>
    );

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie?.actors?.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imgUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;

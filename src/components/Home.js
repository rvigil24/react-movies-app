import React from "react";

//configuration
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components

//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
import Spinner from "./Spinner";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import SearchBar from "./SearchBar";
import Button from "./Button";

//image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useHomeFetch();
  const { results, page, total_pages } = state;

  if(error){
    return <div>Something went wrong</div>
  }

  return (
    <>
      {!searchTerm && results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${results[0].backdrop_path}`}
          title={results[0].original_title}
          text={results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid
        header={searchTerm ? `Results for: ${searchTerm}` : "Popular Movies"}
      >
        {results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : null
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {page < total_pages && !loading && <Button text="Load More" callback={()=> setIsLoadingMore(true)} />}
    </>
  );
};

export default Home;

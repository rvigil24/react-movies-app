import { useState, useEffect, useCallback } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = useCallback(async (movieId) => {
    try {
      setLoading(true);
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      const directors = credits.crew.filter((item) => item.job === "Director");
      setState({
        ...movie,
        actors: credits.cast,
        directors,
      });
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovie(movieId);
  }, [movieId, fetchMovie]);

  return {
    state,
    loading,
    error,
  };
};

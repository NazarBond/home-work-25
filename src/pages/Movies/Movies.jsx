import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/movies-api";
import { MovieList } from "../../components/MovieList/MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(setMovies).catch(console.error);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = form.elements.query.value.trim();
    if (!searchValue) return setSearchParams({});
    setSearchParams({ query: searchValue });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;

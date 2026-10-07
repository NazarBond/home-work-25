import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../services/movies-api";
import { BackLink, MovieContainer } from "./MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return null;

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movie;
  const userScore = Math.round(vote_average * 10);

  return (
    <main>
      <BackLink to={backLinkHref.current}>← Go back</BackLink>
      <MovieContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          alt={title}
        />
        <div>
          <h1>
            {title} ({release_date?.slice(0, 4)})
          </h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres?.map((g) => g.name).join(" ")}</p>
        </div>
      </MovieContainer>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

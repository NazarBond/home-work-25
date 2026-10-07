import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/movies-api";
import { List } from "./Cast.styled";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast).catch(console.error);
  }, [movieId]);

  if (!cast.length)
    return <p>We don't have any information about the cast for this movie.</p>;

  return (
    <List>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={name}
            width={150}
          />
          <p>
            <strong>{name}</strong>
          </p>
          <p>Character: {character}</p>
        </li>
      ))}
    </List>
  );
};

export default Cast;

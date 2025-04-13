import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  if (!movie) {
    return <strong>Loading...</strong>;
  }
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt={movie.title}></img>
      {movie.summary !== undefined ? <h4>Summary</h4> : null}
      <p>{movie.summary}</p>
      <h4>Genres</h4>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, medium_cover_image, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={medium_cover_image} alt={title}></img>
      {summary !== "" ? <h4>Summary</h4> : null}
      <p>{summary}</p>
      <h4>Genres</h4>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

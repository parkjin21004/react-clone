import PropTypes from "prop-types";
import styles from "./MovieCard.module.css";

function MovieCard({
  index,
  title,
  genre,
  summary = "",
  posterURL,
  reverse = false,
}) {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textContainer}>
        <div className={styles.indexContainer}>{"01"}</div>
        <div className={styles.mainContent}>
          <div className={styles.subTitleContainer}>
            <div className={styles.rectangle}></div>
            <h2 className={styles.subTitle}>{genre[0]}</h2>
          </div>
          <div className={styles.maintTitleContainer}>
            <h1>{title}</h1>
          </div>
          <div className={styles.summaryContainer}>
            <p>{summary}</p>
          </div>
          <div className={styles.readMore}>read more</div>
        </div>
      </div>
      <div className={styles.posterContainer}>
        <img
          src={posterURL}
          alt={`${title} Poster`}
          className={styles.poster}
        />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string,
  posterURL: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default MovieCard;

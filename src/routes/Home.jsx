import { useEffect, useState } from "react";
// import Movie from "../components/Movie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MovieCard from "../components/MovieCard/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating"
    );
    const json = await response.json();

    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies);
  return (
    <div>
      <Hero />
      <div className="">
        {movies.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              index={index}
              title={movie.title}
              genre={movie.genres}
              summary={movie.summary}
              posterURL={movie.large_cover_image}
            ></MovieCard>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;

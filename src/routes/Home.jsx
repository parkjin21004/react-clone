import { useEffect, useRef, useState } from "react";
// import Movie from "../components/Movie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MovieCard from "../components/MovieCard/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const lastRef = useRef(null);
  const fetchMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?limit=5&page=${page}&minimum_rating=9&sort_by=rating`
    );
    const json = await response.json();

    if (json.data.movies && json.data.movies.length > 0) {
      setMovies((prev) => [...prev, ...json.data.movies]);
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(lastRef.current);
          if (!hasMore) return;
          fetchMovie();
        }
      },
      { threshold: 0.25 }
    );

    if (lastRef.current) {
      observer.observe(lastRef.current);
    }

    return () => {
      if (lastRef.current) {
        observer.unobserve(lastRef.current);
      }
    };
  }, [hasMore, movies]);

  console.log(movies);
  return (
    <div>
      <Hero />
      <div>
        {movies.map((movie, index) => {
          return (
            <div ref={index === movies.length - 1 ? lastRef : null} key={index}>
              <MovieCard
                index={index}
                title={movie.title}
                genre={movie.genres}
                summary={movie.summary}
                posterURL={movie.large_cover_image}
              ></MovieCard>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;

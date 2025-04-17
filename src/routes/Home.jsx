import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MovieCard from "../components/MovieCard/MovieCard";
import ModalCard from "../components/ModalCard/ModalCard";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isLoaded ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoaded]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=5&page=${page}&minimum_rating=9&sort_by=rating`
      );
      const json = await response.json();

      setIsLoaded(true);

      if (json.data.movies && json.data.movies.length > 0) {
        setMovies((prev) => [...prev, ...json.data.movies]);
      } else {
        setHasMore(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const last = lastRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(last);
          if (!hasMore) return;
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.25 }
    );

    if (last) {
      observer.observe(last);
    }

    return () => {
      if (last) {
        observer.unobserve(last);
      }
    };
  }, [hasMore, movies]);

  return (
    <div className="relative">
      <Hero isLoaded={isLoaded} />
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsModalOpen(false)}
        ></div>
      )}
      {isModalOpen && (
        <ModalCard
          title="Attack on Titan the Movie: The Last Attack"
          genre={["Action", "Adventure", "Animation", "Drama"]}
          Year={2024}
          runtime={145}
          rating={9.2}
          posterURL={
            "https://yts.mx/assets/images/movies/attack_on_titan_the_movie_the_last_attack_2024/large-cover.jpg"
          }
          bgURL={
            "https://yts.mx/assets/images/movies/attack_on_titan_the_movie_the_last_attack_2024/background.jpg"
          }
          trailerCode={"3xNH23QkNpk"}
          onClose={() => setIsModalOpen(false)}
        ></ModalCard>
      )}
      <div className="relative z-0">
        {movies.map((movie, index) => {
          return (
            <div ref={index === movies.length - 1 ? lastRef : null} key={index}>
              <MovieCard
                index={index}
                title={movie.title}
                genre={movie.genres}
                summary={movie.summary}
                posterURL={movie.large_cover_image}
                onMoreClick={handleModalOpen}
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

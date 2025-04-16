// import { useEffect, useState } from "react";
// import Movie from "../components/Movie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MovieCard from "../components/MovieCard/MovieCard";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="">
        <MovieCard
          index={0}
          title="Attack on Titan the Movie: The Last Attack"
          genre={["Action", "Adventure", "Animation", "Drama"]}
          summary="This is just a remake of the classic LP album by Pink Floyd. Excellent quality and sound. No actual video like in a concert. Just the music."
          posterURL="https://yts.mx/assets/images/movies/attack_on_titan_the_movie_the_last_attack_2024/large-cover.jpg"
          reverse={0}
        ></MovieCard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;

// function Movies() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovie = async () => {
//     const response = await fetch(
//       "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
//     );
//     const json = await response.json();

//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   useEffect(() => getMovie, []);
//   return (
//     <div>
//       <h1>Movies</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         movies.map((movie) => (
//           <Movie
//             key={movie.id}
//             id={movie.id}
//             title={movie.title}
//             medium_cover_image={movie.medium_cover_image}
//             summary={movie.summary}
//             genres={movie.genres}
//           ></Movie>
//         ))
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <div className="content-section">
        <p>여기부터 일반 컨텐츠</p>
        <p>스크롤이 생길 만큼 쭉 길게 작성하세요</p>
      </div>
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

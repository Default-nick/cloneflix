import React from "react";
import "./Banner.css";
import categories, { getMovies } from "../api";

export default function Banner() {
  const [movie, setMovie] = React.useState({});

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (err) {
      console.log("Banner fetchRandomMovie error: ", err);
    }
  };

  React.useEffect(() => {
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons-container">
          <button className="banner-button">Assistir</button>
          <button className="banner-button">Minha lista</button>
        </div>
        <h2 className="banner-description">{truncate(movie?.overview, 200)}</h2>
      </div>
    </header>
  );
}

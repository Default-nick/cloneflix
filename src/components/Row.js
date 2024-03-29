import React from "react";
import { getMovies } from "../api";
import "./Row.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

export default function Row({ title, path, isLarge }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const imgHost = "https://image.tmdb.org/t/p/original/";

  const handleOnClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((err) => {
          console.log("Error fetching movie trailer: ", err);
        });
    }
  };

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log(data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error:", error);
    }
  };

  React.useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <>
              <img
                className={`movie-card ${isLarge && "movie-card-large"}`}
                onClick={() => handleOnClick(movie)}
                key={movie.id}
                src={`${imgHost}${
                  isLarge ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.name}
              />
            </>
          );
        })}
      </div>
      {trailerUrl && <ReactPlayer playing url={trailerUrl} width="100%" />}
    </div>
  );
}

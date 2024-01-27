import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
const [movies, setMovies] = useState([]);
const [trailerURL, setTrailerURL] = useState("");

useEffect(() => {
  async function fetchData() {
    const request = await axios.get(fetchUrl);
    // console.log(request.data.results);
    setMovies(request.data.results);
    return request;
  }
  fetchData();
}, [fetchUrl]);
// console.log(movies);
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const handleClick = (movie) => {
  if (trailerURL) {
    setTrailerURL("");
  } else {
    movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }
};
return (
  <div className="row">
    <h1>{title}</h1>
    <div className="row_posters">
      {movies.map((movie) => (
        <img
        key={movie.id}
        onClick={() => handleClick(movie)}
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>
    <div style={{ padding: "40px" }}>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  </div>
);
}

export default Row
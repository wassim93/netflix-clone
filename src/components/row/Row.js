import axios from "../../network/axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../row/Row.css";

const imageUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // check if a video url is already set open
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // calling exernal component movie trailer to find a url for our movie
      movieTrailer(movie?.name || "")
        .then((url) => {
          // result will be full url
          // https://www.youtube.com/watch?v=vfBrUvPgWTE
          // so we need to extract the video id only
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="posters">
        {movies.map((m) => (
          <LazyLoadImage
            effect="blur"
            onClick={() => handleClick(m)}
            className={isLargeRow ? "row_poster row_large" : "row_poster"}
            key={m.id}
            src={`${imageUrl}${isLargeRow ? m.poster_path : m.backdrop_path}`}
            alt={m.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

import axios from "../../network/axios";
import React, { useEffect, useState } from "react";
import "../row/Row.css";

const imageUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="posters">
        {movies.map((m) => (
          <img
            className="row_poster"
            key={m.id}
            src={`${imageUrl}${m.poster_path}`}
            alt={m.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;

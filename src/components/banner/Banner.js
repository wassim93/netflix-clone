import "../banner/Banner.css";
import React, { useEffect, useState } from "react";
import axios from "../../network/axios";
import requests from "../../network/requests";

const imageUrl = "https://image.tmdb.org/t/p/original/";

function truncate(str, n) {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
}
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      console.log("res", res);

      const randomMovie =
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ];
      setMovie(randomMovie);
      return res;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
};

export default Banner;

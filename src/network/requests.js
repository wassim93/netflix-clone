const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default requests;

import "./App.css";
import requests from "./network/requests";
import Row from "./components/row/Row";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
};

export default App;

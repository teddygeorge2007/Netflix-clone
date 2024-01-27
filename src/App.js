import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Nav from './components/NavBar/Nav';
import Row from './components/Row/Row';
import requests from './components/requests';


function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    {/* <h1 className='keye'>NETFLIX</h1> */}
    <div className="res">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchToprated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  </div>
  );
}

export default App;

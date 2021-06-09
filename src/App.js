import './App.css';
import requests from './requests'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

import Row from './components/Row'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;

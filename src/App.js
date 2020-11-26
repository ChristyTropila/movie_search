import './App.css';
import Row from './Row.js'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Hollywood</h1>
      <Row title="Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Movies" fetchUrl={requests.fetchTrending1}/>
      <Row title="Movies" fetchUrl={requests.fetchTrending2}/>
      <Row title="Movies" fetchUrl={requests.fetchTrending3}/>
      <Row title="Movies" fetchUrl={requests.fetchTrending4}/>
      {/* <Row title="Movies" fetchUrl={requests.fetchTrending5}/>
      <Row title="Movies" fetchUrl={requests.fetchTrending6}/>
      <Row title="Movies" fetchUrl={requests.fetchTrending7}/>
      <Row title="Movies" fetchUrl={requests.fetchTrending8}/> */}


      {/* <Row title="Top Rated Movies" fetchUrl={}/> */}
    </div>
  );
}

export default App;

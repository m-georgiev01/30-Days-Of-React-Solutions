import './App.css';
import CountryList from './components/country-list/CountryList';
import NumbersList from './components/numbers-list/NumbersList';

function App() {
  return (
    <div className="App">
      <h1>30 Days Of React</h1>
      <h3>Number Generator</h3>
      <NumbersList />

      <h3>Hexadecimal Colors</h3>
      <NumbersList isHexa />

      <h3>World Population</h3>
      <p>Ten most populated countries</p>
      <CountryList />
    </div>
  );
}

export default App;

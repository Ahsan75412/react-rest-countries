import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>

    </div>
  );
}





export default App;











/* 
function LoadCountries(){
  // 1st  use state here 
  const [countries , setCountries] = useState([]);
//2nd
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h1>Visiting Every Country in the world!</h1>
      <h2>Available Countries: {countries.length}</h2>
      {
        //4th
       countries.map(country => <Country name={country.name.common} population = {country.population} ></Country>)
      }
    </div>
  );
}

//3rd
function Country(props) {
  return(
      <div>
         <h2>Name: {props.name}</h2>
         <h4>Population: {props.population}</h4>
      </div>
  );
 
} */












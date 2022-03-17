import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>

    </div>
  );
}

function LoadCountries(){
  // 1st declear use state here 
  const [countries , setCountries] = useState([]);

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h1>Visiting Every Country in the world!</h1>
      <h2>Available Countries: {countries.length}</h2>
    </div>
  )
}

export default App;

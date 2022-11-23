import {useState, useEffect} from "react";
import Select from "./components/Select";
import './App.css';

function App() {
  const [catData, setCatData] = useState([]);

  function getCatData() {
    fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(data => setCatData(data))
  }

  useEffect(() => {
    getCatData()
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        chuckNorris
      </header>
      
      <Select  catData={catData}/>
    </div>
  );
}

export default App;

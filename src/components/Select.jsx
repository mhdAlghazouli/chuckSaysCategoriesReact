import { useState, useEffect } from "react";
import "./select.css"

const Select = (props) => {
  const [selectCat, setSelectCat] = useState("animal");
  const [selectedData, setSelectedData] = useState([]);
  const [refetch, setRefetch] = useState(false); 

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${selectCat}`)
    .then(response => response.json())
    .then(data => {
      setSelectedData(data)
    });
  },[refetch,selectCat]);

  function _handleClick ()  {
    setRefetch(!refetch)
  }

  return ( 
    <>
      <select onChange={(e) => {
        setSelectCat(e.target.value);
      }}>
        {props.catData.map((cat,index) => <option value={cat} key={index}>{cat}</option>)}
      </select>
      <div className="content">
        {selectedData.value}
      </div>
      <button onClick={_handleClick}>Refresh</button>
    </>
  );
}

export default Select;
import './App.css';
import Recepie from './Recepie';
import React, { useEffect, useState } from "react";

const App=()=> {

  const APPID = "9b657c21"
  const APPKEY = "eaeaa4c8d7a47ad4274bef376d3247e1"
  const [recepie, setRecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [query,setquery]=useState('chocolate');
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`



  useEffect(() => {
    getrecepies();
  }, [query])   



  const getrecepies = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data.hits)
  }
  
  const upddatesearch = (e) => {
    setsearch(e.target.value)
  }

  const getsearch=e=>{
    e.preventDefault();
    setquery(search);
    setsearch('')
  }

  return (
    <div className="App">
      <form className="form" onSubmit={getsearch}>
        <input type="text" className="search-bar" value={search} onChange={upddatesearch} placeholder="search for your dishes here"/>
        <button className="search-button">search</button>
      </form>
      <div className='reci'>
      {
        recepie.map(recepie=>(
          <Recepie key={recepie.recipe.label} 
          title={recepie.recipe.label} 
          cal={recepie.recipe.calories} 
          img={recepie.recipe.image}
          ing={recepie.recipe.ingredients}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App
import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "90611a7f";
  const APP_KEY = "48e5a26ce3194966b1968b14b7fc3d6c";

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className = "App">
      <form className = "search-form">
        <input className="search-bar" type = "text"/>
        <button className="search-button" type = "submit"> Search </button>
      </form>
      {recipes.map(recipe => (
        <Recipe title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;

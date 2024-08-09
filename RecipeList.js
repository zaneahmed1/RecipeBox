import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/Data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('No recipes found', error));
  }, []);

  return (
    <div className="RecipeList">
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
    <div className="button-container">
    <Link to="/recipes">
      <button className="nav-button">Go to Recipe List</button>
    </Link>
    <Link to="/add-recipe">
      <button className="nav-button">Add New Recipe</button>
    </Link>
  </div>
      <h2>Recipe Box</h2>
        <p>Welcome to Recipe Box, a simple app to store your favorite recipes.</p>
    </div>
  );
}

export default Home;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  return (
    <div>
      <h1>Welcome to Express Cinema</h1>


      <Link to="/movies">
        <button>Movies</button>
      </Link>

      <Link to="/newMovie">
        <button>Add New Movie</button>
      </Link>
    </div>
  );
}

export default Home;

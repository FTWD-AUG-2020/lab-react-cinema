import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  return (
    <div>
      <Link to="/movies">
        <button>Movies</button>
      </Link>
      <h1>Welcome to Express Cinema</h1>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = (props) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    console.log("is it working? pleas?");
    async function getMovies() {
      let res = await axios.get("http://localhost:5000/movies");
      console.log(res);
      setMovies(res.data.movies);
    }
    getMovies();
  }, []);

  return (
    <div>
      {movies?.map((movie) => {
        return (
          <div>
            <img src={movie.image} />
            <h1>{movie.title}</h1>
            <Link to={`/movies/${movie._id}`}>See More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;

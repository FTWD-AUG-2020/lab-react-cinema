import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = (props) => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      let res = await axios.get(
        `http://localhost:5000/movies/${props.match.params.id}`
      );
      //console.log(res.data);
      setMovieDetail(res.data.movie);
    }

    getMovieDetails();
  }, []);
  return (
    <div>
      <p>Title: {movieDetail.title}</p>
      <p>Description: {movieDetail.description}</p>
    </div>
  );
};

export default MovieDetails;

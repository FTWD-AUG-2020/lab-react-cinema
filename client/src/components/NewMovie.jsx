import React, {useState} from 'react';
import axios from "axios"
import {Switch, Route, Link} from "react-router-dom"


function NewMovie(props) {

  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [image, setImage] = useState('')
  console.log(title, director, image)

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await axios.post(`http://localhost:5000/newMovie`, {title, director, image})
    console.log(res)
    console.log(props)
    props.history.push('/movies') // Go back to whatever route you give inside the parentheses 
  }


  return (
    <div>
      <form onSubmit={handleSubmit} style={{padding: '80px'}}>
        <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" />
        <input onChange={(e) => setDirector(e.target.value)} type="text" name="director" />
        <input onChange={(e) => setImage(e.target.value)} type="text" name="image" />
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default NewMovie;
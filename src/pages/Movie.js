import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import NavBar from "../components/NavBar";
import {Link} from "react-router-dom";

function Movie() {


  const [movie,setMovie] = useState({})
  const params = useParams()
  const  movieId = params.id
   console.log (params)

   useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then((movie) => setMovie(movie))
    .catch(error => console.error(error));
  },[movieId])

  console.log(movie)
  const genreToRender = movie.genres
  console.log(genreToRender)

  if (!genreToRender){
    return <h1>loading</h1>
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {genreToRender.map((genre)=>{
         return <span key={genre}> {genre} </span>})
            } 
      </main>
    </>
  );
};

export default Movie;

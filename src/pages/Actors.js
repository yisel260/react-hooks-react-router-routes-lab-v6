import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors]=useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(actors => setActors(actors))
      .catch(error => console.error(error))
  }, [])
   
  return (
    <>
      <header>
       <NavBar/>
      </header>
      <main>
      <h1>Actors Page</h1>
        {actors.map((actor)=>{
          return <article>
            <h2>{actor.name}</h2>
            <ul>
            {actor.movies.map((movie)=>{
              return <li> {movie } </li>})
            }
        </ul>
            </article>
          })}
      </main>
    </>
  );
};

export default Actors;

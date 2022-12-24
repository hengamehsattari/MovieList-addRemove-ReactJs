import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const getData = () => {
    fetch(`http://localhost:3001/movies`).then((data) => {
      data.json().then((res) => {
        setMovies(res);
      });
    });
  };
  const deleteMovie = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/movies/${id}`, { method: "DELETE" }).then(
      () => {
        const filteredMovies = movies.filter((mov) => mov.id !== id);
        setMovies(filteredMovies);
      }
    );
  };
  const addMovie = (newMovie) => {
    let updatedMovies=[];
    fetch(`http://localhost:3001/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    }).then((response)=>response.json())
    .then((data)=>{
      // console.log(data)
      updatedMovies=[...movies,data];
      setMovies(updatedMovies);
    })
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Form addMovie={addMovie} />
      <Table movies={movies} deleteMovie={deleteMovie} />
    </>
  );
}
export default App;

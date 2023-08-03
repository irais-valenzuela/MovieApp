import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const lookForMovieById = (id, movies) => {
  let movieObject;
  const numId = parseInt(id);

  movies.forEach((movie) => {
    if (movie.id === numId) {
      movieObject = movie;
    }
  });
  return movieObject;
};

const SingleMovie = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { movies } = state;
  const { id } = useParams();

  const [movieObject, setMovieObject] = useState({});

  useEffect(() => {
    const movieToRender = lookForMovieById(id, movies);
    setMovieObject(movieToRender);
  }, []);

  const handleBack = () => navigate("/");

  return (
    <div>
      <h1>{movieObject.id && `${movieObject.title}`}</h1>
      <p>{movieObject.id && `Director: ${movieObject.director}`}</p>
      <p>{movieObject.id && `Duration: ${movieObject.runtime}`}</p>
      <p>{movieObject.id && `Rating: ${movieObject.rating}`}</p>
      <p>{movieObject.id && `Description: ${movieObject.description}`}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default SingleMovie;

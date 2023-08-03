import { useNavigate } from "react-router-dom";

const AllMovies = ({ movies }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/singleMovie/${id}`, { state: { movies: movies } });
  };

  return (
    <div>
      <h1>All Movies</h1>
      {movies.length &&
        movies.map((movie) => {
          return (
            <div
              className="movie-div"
              key={movie.id}
              onClick={() => handleClick(movie.id)}
            >
              <img src={movie.poster} alt={`Movie poster for ${movie.title}`} />
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
            </div>
          );
        })}
    </div>
  );
};

export default AllMovies;

import AllMovies from "./AllMovies";
import "./styles.css";

const movies = [
  {
    id: 1,
    title: "Real Women Have Curves",
    year: 2002,
    director: "Patricia Cardoso",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwYzUtZmE5YzA4ZDQ5N2QxXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_FMjpg_UX1000_.jpg",
    description:
      "Ana, a first generation Mexican-American teenager on the verge of becoming a woman, is torn between her hopes for the future and her Latino heritage.",
    rating: 7.5,
    runtime: 90
  },

  {
    id: 2,
    title: "Y Tu Mama Tambien",
    year: 2001,
    director: "Alfonso Cuarón",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDlidDh1dGZ6ei1sX1UuY2FjRi1iMDZkNWI0MmQ5YzctMDdmOC1iYTJmYTU0ZWJlNWEyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "Two teenage boys take a road trip through Mexico with a woman in her late twenties.",
    rating: 8.2,
    runtime: 106
  },

  {
    id: 3,
    title: "Coco",
    year: 2017,
    director: "Lee Unkrich",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_coco_19751_v4_s_4141de61.jpeg",
    description:
      "Aspiring musician Miguel teams up with charming trickster Héctor on an extraordinary journey through the Land of the Dead.",
    rating: 8.4,
    runtime: 105
  },

  {
    id: 4,
    title: "Selena",
    year: 1997,
    director: "Gregory Nava",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9g4A3BoE5SdcnJwKBMcoPvZiHNC.jpg",
    description:
      "The true story of Selena Quintanilla-Perez, a Texas-born Tejano singer who rose from cult status to performing at the Astrodome, as well as having chart topping albums on the Latin music charts.",
    rating: 6.7,
    runtime: 127
  },

  {
    id: 5,
    title: "Spy Kids",
    year: 2001,
    director: "Robert Rodriguez",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51BTGGARZNL.jpg",
    description:
      "Two former spies turn parents use their old skills to save their children from an evil mastermind.",
    rating: 5.4,
    runtime: 88
  }
];

export default function App() {
  return (
    <div className="App">
      <AllMovies movies={movies} />
    </div>
  );
}

/*

Here is an outline for a 1 hour React coding challenge prompt:

Build a simple movie browsing app that allows users to view a list of movies and see more details for each movie.

Requirements:

Display a list of movies on the home page. Hardcode an array with 5-10 movie objects, each with a title, release year, and poster image URL.
Render the movie title, year, and poster image for each movie in the list.
Make each list item clickable. When clicked, the app should navigate to a movie details page, passing the id of the selected movie.
The movie details page should display additional info for that movie, including full description, rating, runtime, etc. These additional details can also be hardcoded.
Add a back button on the movie details page to return to the home page.
Use React Router for navigation between the home list page and the movie details page.
Styling/layout is not important, app can have basic styling. Focus on functionality.
*/

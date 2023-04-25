import { getMovies } from "@/lib/mongo/movies";

async function fetchMovies() {
  const { movies } = await getMovies();

  if (!movies) throw new Error("Failed to fetch movies");
  return movies;
}

const Movies = async () => {
  const movies = await fetchMovies();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie._id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Movies;

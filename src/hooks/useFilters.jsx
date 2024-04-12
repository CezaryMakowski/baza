import { useEffect, useState } from "react";

export default function useFilters(movies, activeGenre, isCut) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    let filtered;
    if (isCut) {
      filtered = movies.slice(0, 60);
    } else filtered = movies;

    const ids = filtered.map((movie) => movie.id).toReversed();
    const reversedFiltered = filtered.toReversed();
    filtered = reversedFiltered
      .filter((movie, index) => !ids.includes(movie.id, index + 1))
      .toReversed();

    if (activeGenre === 0) {
      setFilteredMovies(filtered);
      return;
    }
    filtered = filtered.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFilteredMovies(filtered);
  }, [movies, activeGenre, isCut]);

  return { filteredMovies };
}

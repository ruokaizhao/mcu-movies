import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

function SearchBar({ setMovies }) {
  const [input, setInput] = useState("");
  const delayedSearchMovies = useCallback(debounce(searchMovies, 500), [input]);

  async function searchMovies() {
    const response = await fetch("https://mcuapi.herokuapp.com/api/v1/movies");
    const data = await response.json();
    const searchedMovies = data.data.filter((movie) => {
      if (input === "") {
        return movie.trailer_url !== null;
      } else {
        return (
          movie.title.toLowerCase().includes(input.toLowerCase()) &&
          movie.trailer_url !== null
        );
      }
    });
    // Convert box_office to integer for sorting purposes.
    const searchedMovieswithIntegerBoxOffice = searchedMovies.map(
      (searchMovie) => {
        return {
          ...searchMovie,
          box_office: parseInt(searchMovie["box_office"]),
        };
      }
    );
    setMovies(searchedMovieswithIntegerBoxOffice);
  }

  console.log(1);

  useEffect(() => {
    delayedSearchMovies();
    return delayedSearchMovies.cancel;
  }, [input, delayedSearchMovies]);

  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="searchbar__input"
        placeholder="Enter the Marvel movie you'd like to see..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;

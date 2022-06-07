import React, { useState } from 'react'
import FilterMovies from './FilterMovies'
import Movie from './Movie'
import SearchBar from './SearchBar'

function Movies() {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    return (
        <div className="homepage-container">
            <SearchBar setMovies={setMovies} />
            <FilterMovies movies={movies} setFilteredMovies={setFilteredMovies} />
            <div className="movies-container">
            {filteredMovies?.map((movie) => {
                return (
                    <Movie key={movie.id} movie={movie} />
                )
            })}
        </div>
        </div>
        
    )
}

export default Movies
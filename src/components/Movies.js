import React, { useState } from 'react'
import Movie from './Movie'
import SearchBar from './SearchBar'

function Movies() {
    const [movies, setMovies] = useState([])

    return (
        <div className="homepage-container">
            <SearchBar movies={movies} setMovies={setMovies} />
            <div className="movies-container">
            {movies?.map((movie) => {
                return (
                    <Movie key={movie.id} movie={movie} />
                )
            })}
        </div>
        </div>
        
    )
}

export default Movies
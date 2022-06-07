import React, { useState } from 'react'
import FilterMovies from './FilterMovies'
import Movie from './Movie'
import SearchBar from './SearchBar'
import SortMovies from './SortMovies'

function Movies() {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    return (
        <div className="homepage-container">
            <SearchBar setMovies={setMovies} />
            <div className="sort-filter-container">
                <FilterMovies movies={movies} setFilteredMovies={setFilteredMovies} />
                <SortMovies filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} />                
            </div>            
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
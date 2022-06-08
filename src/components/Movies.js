import React, { useState } from 'react'
import FilterMovies from './FilterMovies'
import Movie from './Movie'
import SearchBar from './SearchBar'
import SortMovies from './SortMovies'

function Movies({ filteredMovies, setFilteredMovies }) {
    const [movies, setMovies] = useState([])
    

    return (
        <div className="homepage">
            <SearchBar setMovies={setMovies} />
            <div className="sort-filter">
                <FilterMovies movies={movies} setFilteredMovies={setFilteredMovies} />
                <SortMovies filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} />                
            </div>            
            <div className="movies-container">
                {filteredMovies.map((movie) => {
                    return (
                        <Movie key={movie.id} movie={movie} />
                    )
                })}
            </div>
        </div>        
    )
}

export default Movies
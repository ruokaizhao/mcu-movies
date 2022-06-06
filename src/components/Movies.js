import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import SearchBar from './SearchBar'

function Movies() {
    const [movies, setMovies] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://mcuapi.herokuapp.com/api/v1/movies')
			const data = await response.json()
            const validMovies = data.data.filter((movie) => {
                return (
                    movie.trailer_url !== null
                )
            })
			setMovies(validMovies)
		}
		fetchData()		
	}, [])

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
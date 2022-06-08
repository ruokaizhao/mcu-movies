import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Movies from './components/Movies';

function App() {
	const [filteredMovies, setFilteredMovies] = useState([])

  	return (
    	<Routes>
			<Route path='/' element={<Movies filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} />} />
			<Route path='/:movieTitle' element={<MovieDetail filteredMovies={filteredMovies} />} />
		</Routes>
  	);
}

export default App;

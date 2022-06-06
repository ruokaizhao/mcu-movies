import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';

function App() {
  	return (
    	<Routes>
			<Route path='/' element={<Movies />} />
		</Routes>
  	);
}

export default App;

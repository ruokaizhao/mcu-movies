import { filter } from 'lodash'
import React, { useEffect, useRef } from 'react'

function FilterMovies({ movies, setFilteredMovies }) {
    const filterRef = useRef(null)

    function handleChange(e) {
        const filteredMovies = movies.filter((movie) => {
            if (e.target.value === '-') {
                return true
            } else {
                return movie.phase === parseInt(e.target.value)
            }
        })
        setFilteredMovies(filteredMovies)
    }

    // When new data comes in after search, set filteredMovies according to the current phase.
    useEffect(() => {
        const filteredMovies = movies.filter((movie) => {
            if (filterRef.current.value === '-') {
                return true
            } else {
                return movie.phase === parseInt(filterRef.current.value)
            }
        })
        setFilteredMovies(filteredMovies)
    }, [movies])

    return (
        <div className="filter-container">
            <label>Select a phase</label>
            <select defaultValue="-" onChange={handleChange} ref={filterRef}>
                <option value="-">All Phases</option>
                <option value="1">Phase I</option>
                <option value="2">Phase II</option>
                <option value="3">Phase III</option>
                <option value="4">Phase IV</option>
            </select>  
        </div>         
    )
}

export default FilterMovies
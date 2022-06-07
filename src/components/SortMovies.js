import React, { useState } from 'react'

function SortMovies({ filteredMovies, setFilteredMovies }) {
    const [sortValue, setSortValue] = useState('release_date')

    function handleChange(e) {
        setSortValue(e.target.value)
    }

    function handleAscendingClick() {
        const sortedMovies = [...filteredMovies].sort(function(a, b) {
            if (a[sortValue] < b[sortValue]) {
                return -1
            }
            if (a[sortValue] > b[sortValue]) {
                return 1
            }
            return 0
        })
        setFilteredMovies(sortedMovies)
    }

    function handleDescendingClick() {
        const sortedMovies = [...filteredMovies].sort(function(a, b) {
            if (a[sortValue] > b[sortValue]) {
                return -1
            }
            if (a[sortValue] < b[sortValue]) {
                return 1
            }
            return 0
        })
        setFilteredMovies(sortedMovies)
    }

    return (
        <div>
            <select defaultValue="release_date" onChange={handleChange}>
            <option value="box_office">Box Office</option>
            <option value="release_date">Release Date</option>
            </select>
            <button type="submit" onClick={handleAscendingClick}>Sort Ascendingly</button>
            <button type="submit" onClick={handleDescendingClick}>Sort Descendingly</button>
        </div>        
    )
}

export default SortMovies
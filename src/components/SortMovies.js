import React, { useState } from 'react'

function SortMovies({ filteredMovies, setFilteredMovies }) {
    const [sortValue, setSortValue] = useState('release_date')
    const [isAscending, setIsAscending] = useState(true)

    function handleChange(e) {
        setSortValue(e.target.value)
    }

    function handleClick() {
        isAscending? handleAscendingClick() : handleDescendingClick()
        setIsAscending((isAscending) => !isAscending)
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
        <div className="sort">
            <select defaultValue="release_date" onChange={handleChange}>
                <option value="release_date">Release Date</option >
                <option value="box_office">Box Office</option>                
            </select>
            <button type="submit" onClick={handleClick}>
                {isAscending ? 'Sort Ascendingly' : 'Sort Descendingly'}                
            </button>
        </div>        
    )
}

export default SortMovies
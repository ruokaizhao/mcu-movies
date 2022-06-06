import React, { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

export default function SearchBar({ movies, setMovies }) {
    const [input, setInput] = useState('')

    function searchMovies() {
        const newMovies = movies.filter((movie) => {
            if (input === '') {
                return movie
            } else {
                return movie.title.toLowerCase().includes(input.toLowerCase())
            }
        })
        setMovies(newMovies)
    }

    const delayedSearchMovies = useCallback(debounce(searchMovies, 5000), [])

    useEffect(() => {
        delayedSearchMovies()
        return delayedSearchMovies.cancel
    }, [input, delayedSearchMovies])



    return (
        <div className="searchbar">
            <form className="searchbar__form">
                <input type="text" className="searchbar__input" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" className="searchbar__button">Search</button>
            </form>
        </div>
    )
}

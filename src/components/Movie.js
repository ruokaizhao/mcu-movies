import React from 'react'
import { useNavigate } from 'react-router-dom'

function Movie({ movie }) {
    const url = movie.trailer_url.includes('youtu.be') ? movie.trailer_url.replace('youtu.be', 'www.youtube.com/embed') : movie.trailer_url
    const navigate = useNavigate()

    function handleMovieClick() {
        navigate(`/${movie.title}`)
    }

    return (
        <div className="movie">
            <div className="movie__img" onClick={handleMovieClick}>
                <img src={movie.cover_url} alt="" className="movie__img-img" />
            </div>           

            <h3 className="movie__title">{movie.title}</h3>

            <p className="movie__box_office">
            Box Office: {movie.box_office === 0 
            ? 
            'Not yet released' 
            : 
            movie.box_office < 1.0e+9 
            ? 
            `$${Math.floor(parseInt(movie['box_office'])/1.0e+6)} million`
            :
            `$${Math.floor(parseInt(movie['box_office'])/1.0e+9*100)/100} billion`}
            </p>

            <p>Release Date: {movie.release_date}</p>
        </div>
    )
}

export default Movie
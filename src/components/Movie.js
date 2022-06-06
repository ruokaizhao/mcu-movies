import React, { useState } from 'react'

function Movie({ movie }) {
    const [showTrailer, setShowTrailer] = useState(false)
    const url = movie.trailer_url.includes('youtu.be') ? movie.trailer_url.replace('youtu.be', 'www.youtube.com/embed') : movie.trailer_url

    function handleShowTrailerClick() {
        setShowTrailer((showTrailer) => !showTrailer)
    }

    return (
        <div className="movie-container">
            <div className="movie-container__img">
                <img src={movie.cover_url} alt="" className="movie-container__img-img" />
            </div>           

            <h3 className="movie-container__title">{movie.title}</h3>

            <p>
            Box Office: {movie.box_office === '0' 
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

            <button onClick={handleShowTrailerClick}>Play Trailer</button>

            {showTrailer && <iframe src={url} />}
        </div>
    )
}

export default Movie
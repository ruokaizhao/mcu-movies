import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail({ filteredMovies }) {
    const params = useParams()
    const movieDetail = filteredMovies.find((filteredMovie) => {
        return filteredMovie.title === params['movieTitle']
    })
    const url = movieDetail.trailer_url.includes('youtu.be') ? movieDetail.trailer_url.replace('youtu.be', 'www.youtube.com/embed') : movieDetail.trailer_url
    const secureUrl = url.includes('http://players') ? url.replace('http://players', 'https://players') : url

    return (
        <div className="movie-detail">
            <div className="movie-detail__card">
                <div className="movie-detail__img">
                    <img src={movieDetail.cover_url} alt="" className="movie-detail__img-img" />
                </div>
                <h3 className="movie-detail__title">{movieDetail.title}</h3>
                <p className="movie-detail__box-office">
                Box Office: {movieDetail.box_office === 0 
                ? 
                'Not yet released' 
                : 
                movieDetail.box_office < 1.0e+9 
                ? 
                `$${Math.floor(parseInt(movieDetail['box_office'])/1.0e+6)} million`
                :
                `$${Math.floor(parseInt(movieDetail['box_office'])/1.0e+9*100)/100} billion`}
                </p>
                <p>Release Date: {movieDetail.release_date}</p>
                <button className="movie-detail__button">Play Trailer</button>
            </div>           
           
            <iframe src={secureUrl} title={movieDetail.title} width="100%" height="100%" allowFullScreen={true} className="movie-detail__iframe" />
            <p className="movie-detail__p"><strong>Plot:</strong><br/><br/>{movieDetail.overview}</p>                  
        </div>
    )
}

export default MovieDetail

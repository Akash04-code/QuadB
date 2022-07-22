import React from 'react'
import './mystyle.css'
import { connect } from 'react-redux'
import { Link, Navigate } from "react-router-dom";
function Details({ moviesList }) {

  const pathName = window.location.pathname;
  const movieId = pathName.split("/")[2];

  const movieDetails = moviesList.filter((movie) =>
    movie.show.id === Number(movieId)
  );

  console.log(movieDetails);
  if (moviesList && !moviesList.length) return <Navigate to="/" />
  console.log(moviesList, !moviesList, moviesList.length)
  return (
    <div className='body'>
      <div className='ui-main'>
        <h1>Full Movie Detail </h1>
        <div className='show-detail'>
          <div className='bainner'>
            <div>
              <img src={movieDetails[0].show.image.original} alt='movie' />

            </div>
          </div>
          <div className='detail'>
            <div><b>Name</b>: {movieDetails[0].show.name}</div>
            <div><b>Type</b>: {movieDetails[0].show.type}</div>
            <div><b>Language</b>: {movieDetails[0].show.language}</div>
            <div><b>Runtime</b>: {movieDetails[0].show.runtime}</div>
            <div><b>Premiered</b>: {movieDetails[0].show.premiered}</div>
            <div><b>Genres</b>: {movieDetails[0].show.genres[0]}</div>
            <div><b>Imdb</b>: {movieDetails[0].show.externals.imdb}</div>

          </div>
        </div>
        <div className='description'>
          <a href={movieDetails[0].show.url} target="_blank">View Full Description</a>
            <Link to="/">Back To Main Menu</Link>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // getMoviesList: () => dispatch(fetchList()),
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Details));



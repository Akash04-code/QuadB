import React, { useEffect } from 'react'
import './style.css'
import { connect } from 'react-redux';
import { fetchList } from '../redux/action'
import { Link } from "react-router-dom";
function HomePage({ getMoviesList, moviesList }) {
  useEffect(() => {
    getMoviesList()
  }, [])
  console.table(moviesList);

  return (
    <div className='home-page'>
      <table>
        <thead>
          <tr>
            <th>MovieName</th>
            <th>AvgRunTime</th>
            <th>Rating</th>
            <th>Premeried</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>

          {Array.isArray(moviesList) && moviesList.length
            ? moviesList.map(({ score, show }) => {
              return (
                <tr key={show.id}>
                 <Link to={`/movie/${show.id}`}  style={{textDecoration: 'none'}}><td>{show.name}</td></Link>  
                  <td>{show.averageRuntime}</td>
                  <td>{show.rating.average}</td>
                  <td>{show.premiered}</td>
                  <td>{score}</td>
                </tr>
              )
            })
            : null}
        </tbody>
      </table>
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
    getMoviesList: () => dispatch(fetchList()),
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(HomePage));
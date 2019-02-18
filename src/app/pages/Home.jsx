import React from "react";
import MovieGrid from "../../movies/MovieGrid";
import { connect } from "react-redux";
import fetchMovies from "../../movies/actions";

const Home = props => {
  const { movies, fetchMovies } = props;
  return (
    <div>
      <MovieGrid movies={movies} fetchMovies={fetchMovies} />
    </div>
  );
};

Home.defaultProps = {};

export default connect(
  state => ({
    movies: state.movies
  }),
  dispatch => ({
    fetchMovies: () => dispatch(fetchMovies())
  })
)(Home);

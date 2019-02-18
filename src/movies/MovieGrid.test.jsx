import React from "react";
import renderer from "react-test-renderer";
import MovieGrid from "./MovieGrid";
import { movieItems } from "./mock-data";

it("show display in progres when movie is been fetching", () => {
  const movies = {
    fetching: true
  };
  const tree = renderer
    .create(<MovieGrid movies={movies} fetchMovies={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("show error when movie fetch has failed", () => {
  const movies = {
    error: "error",
    fetching: false
  };
  const tree = renderer
    .create(<MovieGrid movies={movies} fetchMovies={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("show movie list when fetching movies", () => {
  const movies = {
    error: false,
    fetching: false,
    items: movieItems
  };

  const tree = renderer
    .create(<MovieGrid movies={movies} fetchMovies={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

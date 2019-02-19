import React from "react";
import renderer from "react-test-renderer";
import MovieItem from "./MovieItem";
import { BrowserRouter as Router } from "react-router-dom";
it("show movie item", () => {
  const tree = renderer
    .create(
      <Router>
        <MovieItem name="name" slug="slug" experiences="experiences" />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

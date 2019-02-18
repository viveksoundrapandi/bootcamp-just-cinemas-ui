import React from "react";
import renderer from "react-test-renderer";
import MovieItem from "./MovieItem";

it("show movie item", () => {
  const tree = renderer
    .create(<MovieItem name="name" slug="slug" experiences="experiences" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

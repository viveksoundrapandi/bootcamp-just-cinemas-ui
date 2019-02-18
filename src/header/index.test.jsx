import React from "react";
import renderer from "react-test-renderer";
import Header from "./index";

it("show header", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

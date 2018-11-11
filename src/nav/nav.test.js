import React from "react";
import Nav from "./index";
import { render, asFragment } from "react-testing-library";
import "jest-dom/extend-expect";

describe("nav : ", () => {
  test("should render", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnaphot();
  });
});

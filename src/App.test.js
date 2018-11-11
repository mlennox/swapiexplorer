import React from "react";
import App from "./App";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("App", () => {
  test("it renders without crashing", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

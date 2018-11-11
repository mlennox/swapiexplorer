import React from "react";
import Nav from "./index";
import { render, asFragment, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("nav : ", () => {
  test("should render", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("click link should do something", () => {
    const { getByText, asFragment } = render(<Nav />);
    const peopleLink = getByText("People");
    fireEvent.click(peopleLink);
    expect(asFragment()).toMatchSnapshot();
  });
});

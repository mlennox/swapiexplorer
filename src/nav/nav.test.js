import React from "react";
import Nav from "./nav";
import { render, cleanup, container, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("nav : ", () => {
  test("should render", () => {
    const { container } = render(<Nav />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("click link should do something", () => {
    const { container, getByText } = render(<Nav />);
    const peopleLink = getByText("People");
    console.log();
    expect(peopleLink.attributes.getNamedItem("class")).toBeNull();
    fireEvent.click(peopleLink);
    const peopleLinkClass = peopleLink.attributes.getNamedItem("class");
    expect(peopleLinkClass.value).toEqual("active");
  });
});

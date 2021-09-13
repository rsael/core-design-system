import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  test("should render the button", () => {
    // render the button and get the getByRole method
    const { getByRole } = render(<Button />);

    // getByRole as its name gets a selector by its role.
    // in this case we're looking for a `button`.
    // then we make sure it's in the document
    expect(getByRole("button")).toBeInTheDocument();
  });
});

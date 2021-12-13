import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "./Spinner";

describe("Spinner", () => {
	test("should render the Spinner", () => {
		// render the Spinner and get the getByRole method
		const { getByRole } = render(<Spinner />);

		// getByRole as its name gets a selector by its role.
		// in this case we're looking for a `Spinner`.
		// then we make sure it's in the document
		expect(getByRole("div")).toBeInTheDocument();
	});
});

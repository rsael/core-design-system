import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "./Spinner";

describe("Spinner", () => {
	test("should render the Spinner", () => {
		const { getByRole } = render(<Spinner />);
		expect(getByRole("alert")).toBeInTheDocument();
	});
});

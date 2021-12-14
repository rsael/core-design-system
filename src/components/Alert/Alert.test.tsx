import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "./Alert";

describe("Alert", () => {
	test("should render primary Alert", () => {
		const { getByRole } = render(<Alert />);
		expect(getByRole("alert")).toHaveAttribute("kind", "primary");
	});

	test("should render warning Alert", () => {
		const { getByRole } = render(<Alert kind="warning" />);
		expect(getByRole("alert")).toHaveAttribute("kind", "warning");
	});

	test("should render affirmative Alert", () => {
		const { getByRole } = render(<Alert kind="affirmative" />);
		expect(getByRole("alert")).toHaveAttribute("kind", "affirmative");
	});

	test("should render negative Alert", () => {
		const { getByRole } = render(<Alert kind="negative" />);
		expect(getByRole("alert")).toHaveAttribute("kind", "negative");
	});
});

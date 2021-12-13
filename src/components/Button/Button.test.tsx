import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
	test("should render primary button", () => {
		const { getByRole } = render(<Button />);
		expect(getByRole("button")).toHaveAttribute("kind", "primary");
	});

	test("should render secondary button", () => {
		const { getByRole } = render(<Button kind="secondary" />);
		expect(getByRole("button")).toHaveAttribute("kind", "secondary");
	});

	test("should render affirmative button", () => {
		const { getByRole } = render(<Button kind="affirmative" />);
		expect(getByRole("button")).toHaveAttribute("kind", "affirmative");
	});

	test("should render negative button", () => {
		const { getByRole } = render(<Button kind="negative" />);
		expect(getByRole("button")).toHaveAttribute("kind", "negative");
	});

	test("should render disabled button", () => {
		const { getByRole } = render(<Button disabled />);
		expect(getByRole("button")).toBeDisabled();
	});

	test("should render disabled button", () => {
		const { getByRole } = render(<Button disabled />);
		expect(getByRole("button")).toBeDisabled();
	});

	test("should render loading button", () => {
		const { getByRole } = render(<Button loading />);
		expect(getByRole("button")).toHaveTextContent("loading");
	});

	test("should render button with icon", () => {
		const { getByRole } = render(<Button hasIcon />);
		expect(getByRole("button")).toBeInTheDocument();
	});
});

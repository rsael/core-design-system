import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "./Alert";
import Button from "../Button";

describe("Alert", () => {
    test("should render primary Alert", () => {
        render(<Alert />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "primary");
    });

    test("should render warning Alert", () => {
        render(<Alert kind="warning" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "warning");
    });

    test("should render affirmative Alert", () => {
        render(<Alert kind="affirmative" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "affirmative");
    });

    test("should render negative Alert", () => {
        render(<Alert kind="negative" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "negative");
    });

    test("should hide alert ", () => {
        render(<Alert isVisible={false} />);
        const alert = screen.getByRole("alert", { hidden: true });
        expect(alert).not.toBeVisible();
    });

    test("should hide close button", () => {
        render(<Alert hideCloseButton />);
        const alert = screen.queryByTitle("close");
        expect(alert).not.toBeInTheDocument();
    });

    test("should have CTA button", () => {
        render(<Alert actions={<Button />} />);
        const alert = screen.getByRole("button");
        expect(alert).toBeInTheDocument();
    });
});

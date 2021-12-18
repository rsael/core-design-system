import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToastAlert from "./ToastAlert";
import Button from "../../Button";

describe("ToastAlert", () => {
    test("should render primary Alert", () => {
        render(<ToastAlert />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "primary");
    });

    test("should render warning Alert", () => {
        render(<ToastAlert kind="warning" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "warning");
    });

    test("should render affirmative Alert", () => {
        render(<ToastAlert kind="affirmative" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "affirmative");
    });

    test("should render negative Alert", () => {
        render(<ToastAlert kind="negative" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "negative");
    });

    test("should hide alert ", () => {
        render(<ToastAlert isVisible={false} />);
        const alert = screen.getByRole("alert", { hidden: true });
        expect(alert).not.toBeVisible();
    });

    test("should hide close button", () => {
        render(<ToastAlert hideCloseButton />);
        const alert = screen.queryByTitle("close");
        expect(alert).not.toBeInTheDocument();
    });

    test("should have CTA button", () => {
        render(<ToastAlert actions={<Button />} />);
        const alert = screen.getByRole("button");
        expect(alert).toBeInTheDocument();
    });
});

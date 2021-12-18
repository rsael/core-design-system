import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InlineAlert from "./InlineAlert";
import Button from "../../Button";

describe("InlineAlert", () => {
    test("should render primary Alert", () => {
        render(<InlineAlert />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "primary");
    });

    test("should render warning Alert", () => {
        render(<InlineAlert kind="warning" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "warning");
    });

    test("should render affirmative Alert", () => {
        render(<InlineAlert kind="affirmative" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "affirmative");
    });

    test("should render negative Alert", () => {
        render(<InlineAlert kind="negative" />);
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("kind", "negative");
    });

    test("should hide alert ", () => {
        render(<InlineAlert isVisible={false} />);
        const alert = screen.getByRole("alert", { hidden: true });
        expect(alert).not.toBeVisible();
    });

    test("should hide close button", () => {
        render(<InlineAlert hideCloseButton />);
        const alert = screen.queryByTitle("close");
        expect(alert).not.toBeInTheDocument();
    });

    test("should have CTA button", () => {
        render(<InlineAlert actions={<Button />} />);
        const alert = screen.getByRole("button");
        expect(alert).toBeInTheDocument();
    });
});

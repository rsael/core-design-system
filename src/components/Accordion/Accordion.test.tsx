import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from "./Accordion";

describe("Accordion", () => {
    test("should render primary Accordion", () => {
        render(<Accordion title="Accordion" />);
        const accordion = screen.getByText("Accordion");
        expect(accordion).toBeInTheDocument();
    });
});

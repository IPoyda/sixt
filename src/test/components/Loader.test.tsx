import React from "react";
import { render } from "@testing-library/react";
import Loader from "../../components/Loader";

describe("Loader", () => {
    it("renders Loader component", () => {
        const { container } = render(<Loader/>);
        const bars = container?.firstChild?.firstChild?.childNodes || [];
        expect(bars.length).toEqual(5);
        Array.from(container.children).forEach((node) => {
            expect(node).toBeInTheDocument();
            expect(node).not.toBeEmptyDOMElement();
        });
    });
});
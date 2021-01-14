import React from "react";
import { render, screen } from "@testing-library/react";
import Toast from "../../components/Toast";

describe("Toast", () => {
    it("renders Toast component", () => {
        const f = () => null;
        render(<Toast open={true} message="test message" onClose={f} />);
        expect(screen.queryByText(/test message/i)).toBeInTheDocument();
    });
});
import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "../../components/Image";
import FallbackImage from "../../fallback.png";

describe("Image", () => {
    it("renders Image component", () => {
        render(<Image src={FallbackImage} alt="test" fallbackSrc={FallbackImage}/>);
        expect(screen.getByAltText('test')).toBeInTheDocument();
    });
});
import { render, screen } from "@testing-library/react";
import Artboard from "./Artboard";

describe("<Artboard/> component", () => {
  const params = {
    image: "https://via.placeholder.com/300x300",
    title: "Artboard title",
  };

  it("should render the component", () => {
    render(<Artboard title={params.title} image={params.image} />);
    expect(screen.getByTestId("artboard")).toBeInTheDocument();
  });
  it("should have a title and image", () => {
    render(<Artboard title={params.title} image={params.image} />);
    expect(screen.getByText(params.title)).toBeInTheDocument();
    expect(screen.getByTestId("artboard-image")).toBeInTheDocument();
    expect(screen.getByTestId("artboard-image").getAttribute("src")).toContain(
      params.image
    );
  });
});

export {};

import { render, screen } from "@testing-library/react";
import HeaderArtboard from "./HeaderArtboard";

describe("Header Component", () => {
  it("should render the component", () => {
    render(<HeaderArtboard title="My title" />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("should the component to have a title", () => {
    const title = "My Title";
    render(<HeaderArtboard title={title} />);
    expect(screen.getByText(new RegExp(title, "i"))).toBeInTheDocument();
  });
  it("should the component to have a close button", () => {
    render(<HeaderArtboard title="My title" />);
    expect(screen.getByTestId("close-button")).toBeInTheDocument();

    expect(screen.getByTestId("close-image")).toBeInTheDocument();
    expect(screen.getByTestId("close-image").getAttribute("src")).toContain(
      "/assets/close.svg"
    );
  });
  it("should the component to have a separator image", () => {
    render(<HeaderArtboard title="My title" />);
    expect(screen.getByTestId("separator")).toBeInTheDocument();
    expect(screen.getByTestId("separator").getAttribute("src")).toContain(
      "/assets/separator.svg"
    );
  });

  fit("should have a artboard navigation", () => {
    render(<HeaderArtboard title="My title" />);
    expect(screen.getByTestId("artboard-navigation")).toBeInTheDocument();
    expect(
      screen.getByTestId("artboard-navigation-left").getAttribute("src")
    ).toContain("/assets/arrow-left.svg");
    expect(
      screen.getByTestId("artboard-navigation-right").getAttribute("src")
    ).toContain("/assets/arrow-right.svg");
  });
});

export {};

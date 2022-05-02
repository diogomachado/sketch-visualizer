import { render, screen } from "@testing-library/react";
import HeaderArtboard from "./HeaderArtboard";
import { BrowserRouter, MemoryRouter as Router } from 'react-router-dom';


const renderComponent = () => {
  render(<HeaderArtboard title="My title" />, { wrapper: BrowserRouter });
}

describe("Header Component", () => {

  fit("should render the component", () => {
    renderComponent();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should the component to have a title", () => {
    renderComponent();
    expect(screen.getByText(new RegExp("My title", "i"))).toBeInTheDocument();
  });

  it("should the component to have a close button", () => {
    renderComponent();
    expect(screen.getByTestId("close-button")).toBeInTheDocument();

    expect(screen.getByTestId("close-image")).toBeInTheDocument();
    expect(screen.getByTestId("close-image").getAttribute("src")).toContain(
      "/assets/close.svg"
    );
  });
  
  it("should the component to have a separator image", () => {
    renderComponent();
    expect(screen.getByTestId("separator")).toBeInTheDocument();
    expect(screen.getByTestId("separator").getAttribute("src")).toContain(
      "/assets/separator.svg"
    );
  });

  it("should have a artboard navigation", () => {
    render(<HeaderArtboard title="My title" />, {wrapper: BrowserRouter});
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

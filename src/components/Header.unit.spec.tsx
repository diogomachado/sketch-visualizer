import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("should render the component", () => {
    render(<Header title="My title" />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("should the component to have a title", () => {
    const title = "My Title";
    render(<Header title={title} />);
    expect(screen.getByText(new RegExp(title, "i"))).toBeInTheDocument();
  });
  it("should the component to have the sketch icon", () => {
    render(<Header title="My title" />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByTestId("icon").getAttribute("src")).toContain(
      "/assets/sketch-logo.svg"
    );
  });
  it("should the component to have a separator image", () => {
    render(<Header title="My title" />);
    expect(screen.getByTestId("separator")).toBeInTheDocument();
    expect(screen.getByTestId("separator").getAttribute("src")).toContain(
      "/assets/separator.svg"
    );
  });
  it.todo(
    "should the component hidden the title and icon when one artboard is open"
  );
});

export {};

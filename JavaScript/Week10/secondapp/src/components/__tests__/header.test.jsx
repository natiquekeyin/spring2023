import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header test", () => {
  test("renders correctly", () => {
    render(<Header text="Hello" />);
    const textContent = screen.getByText("Hello");
    expect(textContent).toBeInTheDocument();
  });
});

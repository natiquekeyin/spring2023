import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("Welcome renders correctly", () => {
  render(<Welcome />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

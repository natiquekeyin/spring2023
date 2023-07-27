import { render, screen } from "@testing-library/react";
import Event from "./Event";

describe("Event", () => {
  test("renders correctly", () => {
    render(<Event />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const btnIncrement = screen.getByRole("button", { name: "Increment" });
    expect(btnIncrement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Event />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^0$/);
  });
});

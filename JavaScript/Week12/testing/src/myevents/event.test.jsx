import { render, screen } from "@testing-library/react";
import Event from "./Event";
import user from "@testing-library/user-event";

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

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Event />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^1$/);
  });

  test("renders a count of 2 after clicking the icrment button twice", async () => {
    user.setup();
    render(<Event />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^1$/);
  });
});

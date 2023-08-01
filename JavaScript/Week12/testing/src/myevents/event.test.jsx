import { render, screen } from "@testing-library/react";
import Event from "./Event";
import user from "@testing-library/user-event";

describe("Event", () => {
  test("1.renders correctly", () => {
    render(<Event />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const btnIncrement = screen.getByRole("button", { name: "Increment" });
    expect(btnIncrement).toBeInTheDocument();
  });

  test("2.renders a count of 0", () => {
    render(<Event />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^0$/);
  });

  test("3.renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Event />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^1$/);
  });

  test("4.renders a count of 3 after clicking the increment button thrice", async () => {
    user.setup();
    render(<Event />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^3$/);
  });

  // Keyboard events... input type= number has a "spinbutton" role..
  test("5.renders a count of 5 after entering 5 in text box and hitting set button", async () => {
    user.setup();
    render(<Event />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "5");
    expect(amountInput).toHaveValue(5);
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^5$/);
  });

  test("6.elements are focused in the proper order", async () => {
    user.setup();
    render(<Event />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

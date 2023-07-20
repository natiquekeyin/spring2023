import { render, screen } from "@testing-library/react";
import AddPeriod from "./AddPeriod";

describe("Period", () => {
  test("Add Period renders correctly", () => {
    render(<AddPeriod />);
    const textElement = screen.getByText("Period");
    expect(textElement).toBeInTheDocument();
  });

  test("Add period with parameter and period", () => {
    render(<AddPeriod name="Alex" />);
    const textElement = screen.getByText("Period Alex.");
    expect(textElement).toBeInTheDocument();
  });
});

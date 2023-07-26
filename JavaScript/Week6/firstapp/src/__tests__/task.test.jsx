import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("Task renders correctly", () => {
  render(<Task />);
  const someText = screen.getByText("View Details");
  expect(someText).toBeInTheDocument();
});

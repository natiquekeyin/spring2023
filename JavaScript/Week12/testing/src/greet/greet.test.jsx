import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Form", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const comboElement = screen.getByRole("combobox");
    expect(comboElement).toBeInTheDocument();

    const checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).toBeInTheDocument();

    const nameElement2 = screen.getByRole("textbox", {
      name: "Comment",
    });
    expect(nameElement2).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const pageHeading2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading2).toBeInTheDocument();

    const nameElement3 = screen.getByLabelText("Name");
    expect(nameElement3).toBeInTheDocument();

    const lblElement = screen.getByLabelText("I agree");
    expect(lblElement).toBeInTheDocument();

    const plcElement = screen.getByPlaceholderText("Enter your name here");
    expect(plcElement).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("keyin");
    expect(nameElement4).toBeInTheDocument();

    const paraElement = screen.getByTestId("para");
    expect(paraElement).toBeInTheDocument();

    const helloText = screen.getByText("hello world", { exact: false });
    // exact:false can be used i) substring search
    // exact:false can also be used for ignore case..
    expect(helloText).toBeInTheDocument();

    const helloText2 = screen.getByText(/^hello world$/i);
    // /World/ it will make a substring search
    // exact:false can also be used for ignore case..
    expect(helloText2).toBeInTheDocument();

    const helloText3 = screen.getByText((content) => content.endsWith("world"));
    // /World/ it will make a substring search
    // exact:false can also be used for ignore case..
    expect(helloText3).toBeInTheDocument();
  });
});

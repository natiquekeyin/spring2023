import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["Programming", "Book", "Walking"];

  test("renders correcly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Log In" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Logged In button is not rendered", () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const loggedInButton = screen.queryByRole("button", {
      name: "Logged In",
    });
    // getByRole actually tries to find an element, if it is not there it will throw and error
    expect(loggedInButton).not.toBeInTheDocument();
  });

  test("Logged In button is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const loggedInButton2 = await screen.findByRole(
      "button",
      {
        name: "Logged in",
      },
      { timeout: 2000 }
    );

    expect(loggedInButton2).toBeInTheDocument();
  });
});

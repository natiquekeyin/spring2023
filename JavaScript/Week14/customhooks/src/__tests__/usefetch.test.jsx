import useLocalStorage from "../hooks/useLocalStorage";
import { renderHook } from "@testing-library/react";

describe("use Fetch testing", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useLocalStorage);
    expect(result.current.value).toBe(0);
  });
});

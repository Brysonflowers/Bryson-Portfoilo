import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeContext";

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe("ThemeContext", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("provides light theme by default", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
  });

  it("toggles theme between light and dark", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    const button = screen.getByText("Toggle Theme");

    fireEvent.click(button);
    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");

    fireEvent.click(button);
    expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
  });
});

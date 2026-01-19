import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";
import { ThemeProvider } from "../../context/ThemeContext";

describe("Header", () => {
  it("renders the navigation links", () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});

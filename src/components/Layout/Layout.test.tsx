import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Layout from "./Layout";
import { ThemeProvider } from "../../context/ThemeContext";

describe("Layout", () => {
  it("renders header, footer, and children", () => {
    render(
      <ThemeProvider>
        <Layout>
          <div data-testid="child">Test Content</div>
        </Layout>
      </ThemeProvider>
    );
    expect(screen.getByRole("complementary")).toBeInTheDocument(); // Sidebar
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders header, footer, and children", () => {
    render(
      <Layout>
        <div data-testid="child">Test Content</div>
      </Layout>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});

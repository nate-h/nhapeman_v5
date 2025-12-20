import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render without crashing", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render all navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Experience").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Books").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Resume").length).toBeGreaterThan(0);
  });

  it("should toggle mobile menu when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();

    // Mobile menu should not be visible initially
    const mobileLinks = screen.getAllByText("Home");
    expect(mobileLinks.length).toBe(1); // Only desktop link

    // Click to open
    await user.click(menuButton);

    // Mobile menu should now be visible
    const mobileLinksAfterClick = screen.getAllByText("Home");
    expect(mobileLinksAfterClick.length).toBe(2); // Desktop + mobile link
  });

  it("should render logo image", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("NH Logo");
    expect(logo).toBeInTheDocument();
  });
});

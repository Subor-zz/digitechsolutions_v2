// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { MobileNav } from "./MobileNav";

afterEach(cleanup);

describe("MobileNav", () => {
  it("opens, closes after navigation, and exposes its state", () => {
    render(<MobileNav />);

    const toggle = screen.getByRole("button", { name: "Navigatie" });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("navigation", { name: "Mobiele navigatie" })).toBeTruthy();

    fireEvent.click(screen.getByRole("link", { name: "De scan" }));
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("closes with Escape", () => {
    render(<MobileNav />);

    const toggle = screen.getByRole("button", { name: "Navigatie" });
    fireEvent.click(toggle);
    fireEvent.keyDown(window, { key: "Escape" });

    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("uses a local form target when the dedicated route supplies one", () => {
    render(<MobileNav primaryCtaHref="#probleemverkenning" />);

    fireEvent.click(screen.getByRole("button", { name: "Navigatie" }));

    expect(
      screen.getByRole("link", { name: "Plan een kennismaking" }).getAttribute("href"),
    ).toBe("#probleemverkenning");
  });
});

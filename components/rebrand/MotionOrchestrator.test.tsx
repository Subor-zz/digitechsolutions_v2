// @vitest-environment jsdom

import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { MotionOrchestrator } from "./MotionOrchestrator";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function motionPreference(matches: boolean) {
  return {
    matches,
    media: "(prefers-reduced-motion: reduce)",
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
}

describe("MotionOrchestrator", () => {
  it("arms reveal elements and disconnects its observer on cleanup", () => {
    const disconnect = vi.fn();
    const observe = vi.fn();

    class IntersectionObserverMock {
      observe = observe;
      unobserve = vi.fn();
      disconnect = disconnect;

      constructor() {}
    }

    vi.stubGlobal("matchMedia", vi.fn(() => motionPreference(false)));
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

    const { unmount } = render(
      <>
        <main id="hoofdinhoud"><div data-testid="reveal" data-reveal="rise" /></main>
        <MotionOrchestrator />
      </>,
    );

    const element = document.querySelector<HTMLElement>("[data-reveal]");
    expect(element?.classList.contains("motion-reveal")).toBe(true);
    expect(observe).toHaveBeenCalledWith(element);

    unmount();
    expect(disconnect).toHaveBeenCalled();
    expect(element?.classList.contains("motion-reveal")).toBe(false);
  });

  it("keeps all content immediately visible when reduced motion is requested", () => {
    vi.stubGlobal("matchMedia", vi.fn(() => motionPreference(true)));

    render(
      <>
        <main id="hoofdinhoud"><div data-testid="reveal" data-reveal="rise" /></main>
        <MotionOrchestrator />
      </>,
    );

    const element = document.querySelector<HTMLElement>("[data-reveal]");
    expect(element?.classList.contains("motion-reveal")).toBe(false);
    expect(element?.classList.contains("is-revealed")).toBe(true);
  });
});

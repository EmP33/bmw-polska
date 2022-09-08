import useMediaQuery from "../useMediaQuery";
import { renderHook } from "@testing-library/react";

describe("useMediaQuery Hook test", () => {
  const render = (matches: boolean) => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: matches, // matches
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };
  it("should return false", () => {
    render(false);
    const { result } = renderHook(() => useMediaQuery("(min-width: 360px)"));
    expect(result.current).toBeFalsy();
  });

  it("should return true", () => {
    render(true);
    const { result } = renderHook(() => useMediaQuery("(min-width: 360px)"));
    expect(result.current).toBeTruthy();
  });
  it("should return default matches value", () => {
    render(false);
    const { result } = renderHook(() => useMediaQuery(""));
    expect(result.current).toBeFalsy();
  });
});

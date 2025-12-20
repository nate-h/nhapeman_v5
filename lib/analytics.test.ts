import { describe, it, expect, vi, beforeEach } from "vitest";
import { pageview, event, GA_MEASUREMENT_ID } from "./analytics";

describe("Analytics utilities", () => {
  beforeEach(() => {
    // Reset window.gtag before each test
    window.gtag = undefined;
  });

  describe("GA_MEASUREMENT_ID", () => {
    it("should be defined", () => {
      expect(GA_MEASUREMENT_ID).toBeDefined();
      expect(typeof GA_MEASUREMENT_ID).toBe("string");
    });
  });

  describe("pageview", () => {
    it("should call gtag with correct parameters when gtag is available", () => {
      const mockGtag = vi.fn();
      window.gtag = mockGtag;

      pageview("/test-page");

      expect(mockGtag).toHaveBeenCalledWith("config", GA_MEASUREMENT_ID, {
        page_path: "/test-page",
      });
    });

    it("should not throw error when gtag is not available", () => {
      expect(() => pageview("/test-page")).not.toThrow();
    });
  });

  describe("event", () => {
    it("should call gtag with correct parameters when gtag is available", () => {
      const mockGtag = vi.fn();
      window.gtag = mockGtag;

      event({
        action: "click",
        category: "button",
        label: "signup",
        value: 1,
      });

      expect(mockGtag).toHaveBeenCalledWith("event", "click", {
        event_category: "button",
        event_label: "signup",
        value: 1,
      });
    });

    it("should work without optional parameters", () => {
      const mockGtag = vi.fn();
      window.gtag = mockGtag;

      event({
        action: "view",
        category: "page",
      });

      expect(mockGtag).toHaveBeenCalledWith("event", "view", {
        event_category: "page",
        event_label: undefined,
        value: undefined,
      });
    });

    it("should not throw error when gtag is not available", () => {
      expect(() =>
        event({
          action: "test",
          category: "test",
        })
      ).not.toThrow();
    });
  });
});

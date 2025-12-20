import { describe, it, expect } from "vitest";
import { experience, projects, books, skills } from "../data";

describe("Data exports", () => {
  it("should export experience array", () => {
    expect(Array.isArray(experience)).toBe(true);
    expect(experience.length).toBeGreaterThan(0);
  });

  it("should have valid experience structure", () => {
    const firstExperience = experience[0];
    expect(firstExperience).toHaveProperty("id");
    expect(firstExperience).toHaveProperty("company");
    expect(firstExperience).toHaveProperty("position");
    expect(firstExperience).toHaveProperty("period");
  });

  it("should export projects array", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("should have valid project structure", () => {
    const firstProject = projects[0];
    expect(firstProject).toHaveProperty("id");
    expect(firstProject).toHaveProperty("title");
    expect(firstProject).toHaveProperty("description");
  });

  it("should export books array", () => {
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBeGreaterThan(0);
  });

  it("should have valid book structure", () => {
    const firstBook = books[0];
    expect(firstBook).toHaveProperty("title");
    expect(firstBook).toHaveProperty("author");
    expect(firstBook).toHaveProperty("coverUrl");
  });

  it("should export skills array", () => {
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
  });

  it("should have valid skill structure", () => {
    const firstSkill = skills[0];
    expect(firstSkill).toHaveProperty("name");
    expect(firstSkill).toHaveProperty("category");
  });
});

describe("should work", () => {
  it("addThree should be defined", () => {
    expect(typeof addThree === "function").toBe(true);
  });
  it("should return 5 when passed 2", () => {
    expect(addThree(2)).toBe(5);
  });
  it("should return 4 when passed 1", () => {
    expect(addThree(1)).toBe(4);
  });
  it("should return 1 when passed -2", () => {
    expect(addThree(-2)).toBe(1);
  });
  it("should return 3 when passed 0", () => {
    expect(addThree(0)).toBe(3);
  });
});

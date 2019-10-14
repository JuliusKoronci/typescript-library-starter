import component from "../index";

describe("component", () => {
  it("creates an html element", () => {
    expect(component()).toMatchInlineSnapshot(`
      <div>
        Hello webpack
      </div>
    `);
  });
});

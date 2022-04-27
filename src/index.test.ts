import { helloWorld } from ".";

describe("example tests", () => {
  it("runs tests", () => {
    expect(helloWorld({ name: "Jane Doe" })).toEqual("Hello Jane Doe");
  });
});

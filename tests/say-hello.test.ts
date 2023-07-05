import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("it should return hello samba", () => {
    const name = "samba";
    expect(sayHello(name)).toBe("Hello samba");
  });
});

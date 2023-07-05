describe("Union", function () {
  it("should support union", function () {
    let phone: string | number | boolean = "08123456789";
    console.info(phone);

    phone = 628123456789;
    console.info(phone);

    phone = true;
    console.info(phone);
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "number") {
        return value * 2;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      } else {
        return !value;
      }
    }

    expect(process(10)).toBe(20);
    expect(process("Gustio Nusamba")).toBe("GUSTIO NUSAMBA");
    expect(process(true)).toBe(false);

    console.info(process(100));
    console.info(process("Gustio Nusamba"));
    console.info(process(true));
  });
});

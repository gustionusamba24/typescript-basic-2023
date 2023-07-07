describe("Null safety", function () {
  it("should ", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Gustio");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});

describe("Object", function () {
  it("should support an object", function () {
    const person: { id: string; name: string } = {
      id: "1",
      name: "Gustio",
    };

    console.info(person);

    person.id = "2";
    person.name = "Nusamba";

    console.info(person);
  });
});

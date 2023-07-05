describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Gustio Nusamba",
      age: 22,
    };

    person.age = 100;
    person.address = "Sleman";

    console.info(person);
  });
});

describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["Gustio", "Nusamba", "Hatmaja"];
    const values: number[] = [1, 2, 3, 4, 5];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["Coding", "Reading", "Writing"];
    console.info(hobbies);
  });

  it("should support tuple array", function () {
    const person: readonly [string, string, number] = [
      "Gustio",
      "Nusamba",
      19113179,
    ];
    console.info(person);
  });
});

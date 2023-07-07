import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should support an enum", function () {
    const customer: Customer = {
      id: 1,
      name: "Gustio",
      type: CustomerType.GOLD,
    };

    console.info(customer.type);
  });
});

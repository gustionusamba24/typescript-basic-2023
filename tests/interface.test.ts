import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support an interface", function () {
    const seller: Seller = {
      id: 1,
      name: "Aldi",
      nib: "121379",
      npwp: "2324242",
    };

    seller.name = "Taher";

    console.info(seller);
  });
});
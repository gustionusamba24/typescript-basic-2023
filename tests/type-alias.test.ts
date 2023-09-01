import {Category, Product} from "../src/type-alias";

describe("Alias", function () {
    it("should support alias", function () {
        const category: Category = {
            id: "1",
            name: "Handphone",
        };

        const product: Product = {
            id: 23,
            name: "Samsung S23",
            price: 20000000,
            category: category,
        };

        console.info(category);
        console.info(product);
    });
});

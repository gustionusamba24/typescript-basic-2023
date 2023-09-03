import {Seller} from "../src/seller";

describe("Interface", function () {
    it("should support an interface", function () {
        const seller: Seller = {
            id: 1, name: "Aldi", nib: "121379", npwp: "2324242",
        };

        seller.name = "Taher";

        console.info(seller);
    });

    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(3, 5)).toBe(8);
    });
});

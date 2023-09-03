import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";

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

    it("should support function interface", () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (
            value1: number,
            value2: number
        ): number => {
            return value1 + value2;
        };

        expect(add(3, 5)).toBe(8);
    });

    it("should support indexable interface", () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Samba", "Gustio", "Hatma"];
        console.info(names);
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": "Agus",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("Agus");
        expect(dictionary["address"]).toBe("Indonesia");
    });

    it('should support extending interface', () => {
        const employee: Employee = {
            id: "1",
            name: "Samba",
            division: "IT"
        }

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Samba",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager);
    });

    it('should support function interface', () => {
        interface Person {
            name: string,
            bonus: number,

            sayHi(name: string): string;
        }

        const person: Person = {
            name: "Gustio",
            bonus: (105 / 100),
            sayHi: function (name: string): string {
                let salary = this.bonus * 8000000;
                return `Hi Mr.${name}, my salary right now is ${salary}`;
            }
        }

        console.info(person.sayHi("Manager"));
    });


});

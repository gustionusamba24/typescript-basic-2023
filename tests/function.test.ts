describe('Function', () => {
    it('should support function in typescript', () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Budi")).toBe("Hello Budi");
        expect(sayHello()).toBe("Hello Guest");

        function printHello(name: string): void {
            console.log(`Hello ${name}`);
        }

        printHello("Agus");
    });

    it('should support rest parameter', () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support function overloading', () => {
        function call(value: string): string;
        function call(value: number): number;
        function call(value: any) {
            if (typeof value === "number") {
                return value;
            } else if (typeof value === "string") {
                return value;
            }
        }

        expect(call(100)).toBe(100);
        expect(call("Eko")).toBe("Eko");
    });

    it('should support function as parameter', () => {
        function sortedNumber(num: number[], filter: (value: number[]) => number[]): string {
            const result = filter(num);
            return `Sorted number: ${result.join(",")}`;
        }

        function filterSort(value: number[]): number[] {
            return value.sort();
        }

        console.info(sortedNumber([1, 3, 2, 5, 4], filterSort));

        expect(sortedNumber([1, 3, 2, 5, 4], filterSort)).toBe("Sorted number: 1,2,3,4,5");
    });
});
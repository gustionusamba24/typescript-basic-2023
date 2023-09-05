export interface Person {
    name: string,
    bonus: number,

    sayHi(name: string): string;
}
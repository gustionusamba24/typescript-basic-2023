import {sayHello} from "../src/say-hello";

describe('sayHello', function () {
    it('should return hello samba', function () {
        const name = 'samba';
        expect(sayHello(name)).toBe(`Hello ${name}`);
    });
});

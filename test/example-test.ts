import { parameterizedTableTag } from "../src/parameterized-table-template";
import * as assert from "assert";

describe("example", () => {
    describe("sum tests", () => {
        // function
        const sum = (x: number, y: number) => x + y;
        // generate tests
        parameterizedTableTag<{ first: number; second: number; expected: number }>`
first | second | expected
${1}  | ${2}   | ${3}
${2}  | ${1}   | ${3}
${2}  | ${2}   | ${4}
`.forEach(({ first, second, expected }) => {
            it(`${first} + ${second} = ${expected}`, () => {
                assert.strictEqual(sum(first, second), expected);
            });
        });
    });
});

import { parameterizedTableTag } from "../src/parameterized-table-template";
import * as assert from "assert";

describe("parameterizedTableTag", () => {
    it("should return array of parameters", () => {
        const table = parameterizedTableTag`
first | second | expected
${1}  | ${2}   | ${3}
${2}  | ${1}   | ${3}
${2}  | ${2}   | ${4}
`;

        assert.deepStrictEqual(table, [
            {
                expected: 3,
                first: 1,
                second: 2
            },
            {
                expected: 3,
                first: 2,
                second: 1
            },
            {
                expected: 4,
                first: 2,
                second: 2
            }
        ]);
    });
    it("should return array of parameters that can includes multi byte and space", () => {
        const table = parameterizedTableTag`
A B C       |    日本語
${"Hello"}  | ${"こんにちは"}
${"Move"}   | ${"動く"}
`;

        assert.deepStrictEqual(table, [
            {
                ABC: "Hello",
                日本語: "こんにちは"
            },
            {
                ABC: "Move",
                日本語: "動く"
            }
        ]);
    });
});

# parameterized-table-template

A helper library for Parameterized testing with Markdown table.

This is inspired by [jest-each](https://github.com/facebook/jest/tree/ebaf93481e68b4a149dedc0684792a51ef1c5ab7/packages/jest-each).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install parameterized-table-template

## Usage

```ts
import * as assert from "assert";
import { parameterizedTableTag } from "parameterized-table-template";

describe("example", () => {
    describe("sum tests", () => {
        // function for testing
        const sum = (x: number, y: number) => x + y;
        // generate tests
        parameterizedTableTag<{ first: number, second: number, expected: number }>`
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
```

## API 

### `parameterizedTableTag`: `object[]`

`parameterizedTableTag` is a [Tag functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).

It return array of object that is defined in table.

`parameterizedTableTag` takes a tagged template string with:

- First row of variable name column headings separated with `|`
- One or more subsequent rows of data supplied as template literal expressions using `${value}` syntax.


```
const table = parameterizedTableTag`
first | second | expected
${1}  | ${2}   | ${3}
${2}  | ${1}   | ${3}
${2}  | ${2}   | ${4}
`;
/*
[
    {
        "expected": 3,
        "first": 1,
        "second": 2
    },
    {
        "expected": 3,
        "first": 2,
        "second": 1
    },
    {
        "expected": 4,
        "first": 2,
        "second": 2
    }
]
*/
```

## Changelog

See [Releases page](https://github.com/azu/parameterized-table-template/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/parameterized-table-template/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu

## Acknowledge

It is based on [jest-each](https://github.com/facebook/jest/tree/ebaf93481e68b4a149dedc0684792a51ef1c5ab7/packages/jest-each).

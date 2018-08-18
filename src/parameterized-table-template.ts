const getHeadingKeys = (headings: string): Array<string> => {
    return headings.replace(/\s/g, "").split("|");
};

const createFilledArray = <T>(len: number, val: T): Array<T> => {
    let rv = new Array(len);
    while (--len >= 0) {
        rv[len] = val;
    }
    return rv;
};

const buildTable = (data: Array<any>, rowSize: number, keys: Array<string>): Array<any> => {
    const arraySize = data.length / rowSize;
    return createFilledArray(arraySize, 0)
        .map((_, index) => data.slice(index * rowSize, index * rowSize + rowSize))
        .map(row => {
            return row.reduce((acc, value, index) => {
                return {
                    ...acc,
                    ...{ [keys[index]]: value }
                };
            }, {});
        });
};

export const parameterizedTableTag = <T extends {}>(
    literals: TemplateStringsArray,
    ...placeholders: any[]
): Array<T> => {
    const keys = getHeadingKeys(literals[0]);
    return buildTable(placeholders, keys.length, keys);
};

import { deepSortObject, stableStringify } from "../utils";

describe('deepSortObject', () => {
  it ('returns sorted object', () => {
    const got = deepSortObject({ b: 1, a: { y: 2, x: 3 }, d: [{ n: 4, m: 5 }, { m: 6, n: 7 }], c: null })
    const want = { a: { x: 3, y: 2 }, b: 1, c: null, d: [{ m: 5, n: 4 }, { m: 6, n: 7 }]}
    expect(got).toEqual(want)
  })
})

describe('stableStringify', () => {
  it ('returns string of sorted object', () => {
    const got = stableStringify({ b: 1, a: { y: 2, x: 3 }, d: [{ n: 4, m: 5 }, { m: 6, n: 7 }], c: null })
    const want = "{\"a\":{\"x\":3,\"y\":2},\"b\":1,\"c\":null,\"d\":[{\"m\":5,\"n\":4},{\"m\":6,\"n\":7}]}"
    expect(got).toEqual(want)
  })
})
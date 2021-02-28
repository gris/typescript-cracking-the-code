import * as functions from "./permutation"

for (let key in functions) {
  let func = functions[key]

  describe("permutation: " + key, function () {
    ;[
      ["abcdefg", "cafdgeb"],
      ["jklpoiuqwerzxcvmnsadf", "drijvxqscwzoauefnklpm"],
      ["1234567890", "6035817429"],
      ["AaBbCcDdeFg1234567890(*&^%$#@!)", "#4^3d!b)@&6%FgA70*(18BC$c5eaD92"]
    ].forEach((arg) => {
      it(`returns true for strings that are permutations: '${arg[0]}' & '${arg[1]}'`, function () {
        expect(func(arg)).toBe(true)
      })
    })
    ;[
      ["abcdefghiz", "ihgfedcbaa"],
      ["1a1", "11"],
      ["1122334455667788", "9911223344556677"],
      ["45678", "1239"]
    ].forEach((arg) => {
      it(`returns false for strings that are not permutations: '${arg[0]}' & '${arg[1]}'`, function () {
        expect(func(arg)).toBe(false)
      })
    })
  })
}

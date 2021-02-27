import * as functions from "../unique"

for (let key in functions) {
  let func = functions[key]

  describe("unique: " + key, function () {
    ;[
      "abcdefghi",
      "jklpoiuqwerzxcvmnsadf",
      "1234567890",
      "AaBbCcDdeFg1234567890(*&^%$#@!)"
    ].forEach((arg) => {
      it(`returns true for unique string: '${arg}'`, function () {
        expect(func(arg)).toBe(true)
      })
    })
    ;[
      "abcadef",
      "aaaaaaaaaa",
      "abcdefghijklmnopqrstuvwxyza",
      "1234567890asdklf1",
      "!@#$%^&*()(*#($&#(*$&#*($&#()))))"
    ].forEach((arg) => {
      it(`returns false for string with duplicates: '${arg}'`, function () {
        expect(func(arg)).toBe(false)
      })
    })
  })
}

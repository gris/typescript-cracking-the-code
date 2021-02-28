// Hash map data structure
// Time complexity: O(N) on average, where N is the size of string1
// Space complexity: O(N), where N is the size of string1

export function checkIfPermutation([string1, string2]: Array<string>) {
  if (string1.length !== string2.length) {
    return false
  }

  const string1CharactersCount: Record<string, number> = {}
  for (let character of string1) {
    string1CharactersCount[character] =
      string1CharactersCount[character] !== undefined
        ? string1CharactersCount[character] + 1
        : 1
  }

  for (let character of string2) {
    if (
      string1CharactersCount[character] === undefined ||
      string1CharactersCount[character] === 0
    ) {
      return false
    }
    string1CharactersCount[character] = string1CharactersCount[character] - 1
  }

  return true
}

// No extra data structure (assuming that the conversion to array is given)
// Time complexity: O(NlogN), where N is the size of string1
// Space complexity: O(1)

export function checkIfPermutation2([string1, string2]: Array<string>) {
  if (string1.length !== string2.length) {
    return false
  }

  const string1Array = [...string1]
  const string2Array = [...string2]

  string1Array.sort()
  string2Array.sort()

  for (let i = 0; i < string1Array.length; i++) {
    if (string1Array[i] !== string2Array[i]) {
      return false
    }
  }
  return true
}

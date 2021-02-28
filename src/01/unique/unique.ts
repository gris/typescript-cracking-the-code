// no extra data structure
// Time complexity: O(N^2), where N is the size of the string
// Space complexity: O(1)

export function hasOnlyUniqueCharacters1(string: string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false
      }
    }
  }
  return true
}

// hash map data structure
// Time complexity: O(L) on average, where N is the size of the string
// Space complexity: O(L) on average, where N is the size of the string

export function hasOnlyUniqueCharacters2(string: string) {
  const charactersMap: Record<string, true> = {}
  for (let character of string) {
    if (charactersMap[character] === true) {
      return false
    } else {
      charactersMap[character] = true
    }
  }
  return true
}

// boolean vector data structure
// Time complexity: O(L), where L the size of the alphabet
// Space complexity: O(L), where L is the size of the alphabet

export function hasOnlyUniqueCharacters3(string: string) {
  const charactersBitVector: Array<true> = []
  for (let character of string) {
    const position = character.charCodeAt(0)
    if (charactersBitVector[position] === true) {
      return false
    } else {
      charactersBitVector[position] = true
    }
  }
  return true
}

// no extra data structure
// Time complexity: O(NlogN), where N is the size of the string
// Space complexity: O(1), considering that the input is an array of characters

export function hasOnlyUniqueCharacters4(string: string[]) {
  const stringArray = [...string] // This takes O(N), but I'm assuming that I receive this in a similar way from the others
  stringArray.sort()
  for (let i = 0; i < stringArray.length - 1; i++) {
    if (stringArray[i] === stringArray[i + 1]) {
      return false
    }
  }
  return true
}

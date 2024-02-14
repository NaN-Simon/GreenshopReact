/* Рандомайзер чисел(min, max), слов, предложений, абзацев */

const options = {
  minLetterSize: 5,
  maxLetterSize: 10,
  minWordSize: 8,
  maxWordSize: 15,
}

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']; // 21
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y']; // 6

export const getRandom = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // Максимум не включается, минимум включается
}

export const getWord = () => {
  let result = '';
  const letterCount = getRandom(options.minLetterSize, options.maxLetterSize);
  for (let i = 0; i < letterCount; i++) {
    const letterConsonant = CONSONANTS[getRandom(1, CONSONANTS.length)]
    const letterVowel = VOWELS[getRandom(1, VOWELS.length)]
    /* чередование гласных и согласных букв */
    i % 2 === 0
      ? result += letterConsonant
      : result += letterVowel
  }
  return result
}

export const getSentence = () => {
  const arr = []
  const wordCount = getRandom(options.minWordSize, options.maxWordSize)
  for (let i = 0; i <= wordCount; i++) {
    const word = getWord()
    /* Первая буква предложения заглавная */
    if (i === 0) {
      const firstLetter = word.charAt(0).toUpperCase()
      const anotherLetters = word.slice(1)
      arr.push(firstLetter + anotherLetters)
    } else {
      arr.push(word)
    }
  }
  return arr.join(" ") + '.'
}

export const getParagraph = (min: number, max: number) => {
  const arr = []
  const sentenceCount = getRandom(min,max)
  for (let i = 0; i < sentenceCount; i++) {
    arr.push(getSentence())
  }
return arr.join(' ')
}

// const para = getParagraph(2,5)

// console.log(para);
// module.export = {getRandom, getWord, getSentence, getParagraph}

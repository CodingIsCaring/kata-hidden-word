export function decodeWord(encodedWord: number): string {
  const encodedLetters = encodedWord.toString().split('');
  let decodedWord = '';

  encodedLetters.forEach(element => decodedWord += decodeLetter(element));

  return decodedWord;
}

const dictionary = {
  '1': 'b',
  '2': 'l',
  '3': 'i',
  '4': 'e',
  '5': 'm',
  '6': 'a',
  '7': 'd',
  '8': 'n',
  '9': 'c',
  '0': 'o'
};

const decodeLetter = (letter: string): string => {
  return dictionary[letter];
};

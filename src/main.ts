export function decodeWord(encryptedWord: number): string {
  const encryptedWordString = encryptedWord.toString();

  let decryptedWord = '';
  for (let i = 0; i < encryptedWordString.length; i++) {
    decryptedWord += decodeLetter(encryptedWordString[i]);
  }
  return decryptedWord;
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

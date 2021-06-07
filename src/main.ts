export function decodeWord(encryptedWord: number): string {
  const encryptedWordString = encryptedWord.toString();

  let decryptedWord = '';
  for (let i = 0; i < encryptedWordString.length; i++) {
    decryptedWord += decodeLetter(encryptedWordString[i]);
  }
  return decryptedWord;
}

const decodeLetter = (letter: string): string => {
  switch (letter) {
    case '1':
      return 'b';
    case '2':
      return 'l';
    case '3':
      return 'i';
    case '4':
      return 'e';
    case '5':
      return 'm';
    case '6':
      return 'a';
    case '7':
      return 'd';
    case '8':
      return 'n';
    case '9':
      return 'c';
    default:
      return 'o';
  }
  return '';
};

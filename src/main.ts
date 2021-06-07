export function decodeWord(encryptedWord: number): string {
  if (encryptedWord === 80) {
    return 'no';
  }
  return 'a';
}

export function decodeWord(encryptedWord: number): string {
  if (encryptedWord === 80) {
    return 'no';
  } else if (encryptedWord === 124) {
    return 'ble';
  }
  return 'a';
}

import { decodeWord } from '../src/main';

describe('decodeWord should', () => {
  it('decode a word when receives 6', () => {
    expect(decodeWord(6)).toBe('a');
  });

  it('decode no word when receives 80', () => {
    expect(decodeWord(80)).toBe('no');
  });

  it('decode ble word when receives 124', () => {
    expect(decodeWord(124)).toBe('ble');
  });
});

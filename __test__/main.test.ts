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

  it('decode lead word when receives 2467', () => {
    expect(decodeWord(2467)).toBe('lead');
  });

  it('decode code word when receives 9074', () => {
    expect(decodeWord(9074)).toBe('code');
  });

  it('decode leanmind word when receives 24685387', () => {
    expect(decodeWord(24685387)).toBe('leanmind');
  });
});

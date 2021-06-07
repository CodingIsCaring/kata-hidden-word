import { decodeWord } from '../src/main';

describe('decodeWord should', () => {
  it('decode a when receives 6', () => {
    expect(decodeWord(6)).toBe('a');
  });
  it('no', () => {
    expect(decodeWord(80)).toBe('no');
  });
});

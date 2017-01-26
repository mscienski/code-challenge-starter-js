import { expect } from 'chai';
import hello from './app';

describe('hello', () => {
  it('returns hello world', () => {
    expect(hello())
      .to.equal('hello world');
  });
});

import { expect } from 'chai';
import intersection from 'intersection/intersection';

describe('intersection', () => {
  it('returns the intersections of two arrays', () => {
    // Set up
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [1, 1, 2, 3, 5, 8];

    // Run unit and verify expectations
    expect(intersection(arr1, arr2))
      .to.eql([1, 3, 5]);
  });
});

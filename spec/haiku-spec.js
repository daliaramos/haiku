import { Haiku } from './../src/js/haiku.js';

describe('Haiku', function() {
  it('should count the number of variables in a line and subtract one for every "e" on the end of a word', function(){
    let testHaiku = new Haiku("a", "b", "c");
    const testLine = "pike place happy";

    expect(testHaiku.syllableCount(testLine)).toEqual(3);
  });
});

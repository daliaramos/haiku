import { Haiku } from './../src/js/haiku.js';

describe('Haiku', function() {
  it('should count the number of variables in a line and subtract one for every "e" on the end of a word', function(){
    let testHaiku = new Haiku("a", "b", "c");
    const testLine = "pike place hey";

    expect(testHaiku.syllableCount(testLine)).toEqual(3);
  });
});

  describe('vowelsChecker', function(){
    it('should check it the letter is a vowel.', function(){
      let testHaiku = new Haiku("a", "e", "i");
      const testLetter = "a";

      expect(testHaiku.vowelChecker(testLetter)).toEqual(true);
  });
});

describe('diphthong', function() {
  it('should count the number of variables in a line and subtract one for every "e" on the end of a word', function(){
    let testHaiku = new Haiku("a", "b", "c");
    const testLine = "poop";

    expect(testHaiku.syllableCount(testLine)).toEqual(1);
  });
});

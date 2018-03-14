export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
  this.lineOne = lineOne;
  this.lineTwo = lineTwo;
  this.lineThree = lineThree;
}

  syllableCount(line) {
    const words = line.split(" ");
    let syllables = 0;
    for (var i = 0; i < words.length; i++) {
      let numOfVowels = 0
      let currentWord = words[i];
      let vowelArr  = currentWord.match(/[aeiou]/g);
      numOfVowels = parseInt(vowelArr.length);
      let letters = currentWord.split("");
      if (letters[letters.length - 1] == "e") {
        numOfVowels--;
      }
      for (var j = 1; j < letters.length; j++) {
        if letters[j -1] == "a" , "e" ...
      }
      syllables += numOfVowels;
    }
    return syllables;
  }
}

export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
  this.lineOne = lineOne;
  this.lineTwo = lineTwo;
  this.lineThree = lineThree;
}

  syllableCount(line) {
    const words = line.split(" ");
    let syllables = 0;
    for (let i = 0; i < words.length; i++) {
      let numOfVowels = 0;
      let currentWord = words[i];
      let vowelArr  = currentWord.match(/[aeiou]/g);
      numOfVowels = parseInt(vowelArr.length);
      let letters = currentWord.split("");
      if (letters[letters.length - 1] == "e") {
        numOfVowels--;
      }
      numOfVowels = this.diphthong(letters, numOfVowels)

      syllables += numOfVowels;
    }
    return syllables;
  }

  diphthong(letters, numOfVowels) {
    for (let j = 1; j < letters.length; j++) {
      if (this.vowelChecker(letters[j]) && this.vowelChecker(letters[j - 1])){
        numOfVowels--;
      }
    }
    return numOfVowels;
  }

  vowelChecker(letter){
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
      if(vowels[i] == letter){
        return true;
      }
    }
    return false;
  }
}

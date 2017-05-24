// This is all about strings
const aString = "The quick brown fox jumped over the moon";

// What is the length of the string
const stringLength = aString.length; // This is property access
console.log('String Length: ', stringLength);

// What is the first character in the string?
const firstChar = aString.charAt(0);
console.log('The first letter: ', firstChar);

// What is another way to find the first letter in the string?
const firstCharAnotherWay =aString[0];
console.log('The first letter another way: ', firstCharAnotherWay);

// What is the seventh letter of the string?
const seventhChar = aString[6];
console.log('The seventh letter: ', seventhChar);

// How do I put strings together? (concatenation)
const stringsTogether = aString.concat('!');
const stringsTogetherAgain = aString + '!';
console.log('String Together: ', stringsTogether);
console.log('String Together Again: ', stringsTogetherAgain);
console.log('aString: ', aString);

// FACT: String are immutable. You can get new ones, but you can't modify existing ones

// I want part of a string, how do I do that?
const firstFive = aString.slice(0, 5);// endIndex is not included
console.log('First Five Characters of aString: ', firstFive);

// How do I split a sentence into the words?
const words = aString.split(' ');
console.log('Words: ', words);

// What are the number of words in the string?
const numberOfWords = aString.split(' ').length;
console.log('Number Of Words: ', numberOfWords);

// How many spaces are in the string
const numberOfSpaces = numberOfWords - 1;
console.log('Number Of Spaces: ', numberOfSpaces);

// What is the longest word in the string?
const startingWords = aString.split(' ');
const lengthOfWords = startingWords.map(word => word.length);
const maximumWordLength = max(lengthOfWords);
const whereIsTheMax = lengthOfWords.indexOf(maximumWordLength);
console.log(startingWords[whereIsTheMax]);
function max(listOfNums) {
  let maximum = listOfNums[0];
  for(let num of listOfNums) {
    if (num > maximum) {
      maximum = num;
    }
  }
  return maximum;
}
// How do I reverse a string;
const reversedString = aString.split('').reverse().join('');
console.log('Reversed String: ', reversedString);

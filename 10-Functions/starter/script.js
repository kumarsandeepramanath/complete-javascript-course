'use strict';

function oneWord(str) {
  return str.replace(/ /g, '');
}

function firstWordInCaps(sentence) {
  const [firstWord, ...others] = sentence.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
}

// console.log(firstWordInCaps('Javscript is great'));

function transform(str, fn) {
  console.log(`Before transformation : ${str}`);
  console.log(`The ${str} has been transformed to ${fn(str)}`);
  console.log(`After transformation ${str}`);
}

// transform('Javascript is great', firstWordInCaps);
transform('Javascript is great', oneWord);

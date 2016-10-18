'use strict';

export const capFirstLetter = function(str) {
  let arr = str.split(' ');
  arr = arr.map(word => word[0].toUpperCase() + word.substring(1));
  return arr.join(' ');
}
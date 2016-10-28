'use strict';

export const capFirstLetter = function(str) {
  let arr = str.split(' ');
  arr = arr.map(word => word[0].toUpperCase() + word.substring(1));
  return arr.join(' ');
};

export const htmlAttrGen = function(str) {
  let strArr = [];
  let len = str.length;
  let i = 0;
  while (/[\w]/.test(str[i]) && i < len) {
    strArr.push(str[i]);
    i++;
  }
  return strArr.join('');
};

export const arrayConcat = function(arr) {
  if (arr.length === 1) { return arr[0]; }
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) { outputArr.push(' and '); }
    outputArr.push(arr[i]);
    if (i < arr.length - 2) { outputArr.push(', '); }
  }
  return outputArr.join('');
};
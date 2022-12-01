const DateHelper = require('../date-helper.en.js');

const date = new DateHelper('Wed Apr 3 2022 16:02:09 GMT+0300');

console.log(date.format('F D, Y, g:i a')); // April 3, 2022, 04:02 pm
console.log(date.format('m.d.y')); // 04.03.22
console.log(date.format('D, M, Y')); // 3, 4, 2022
console.log(date.format('Ymd')); // 20220403
console.log(date.format('h-i-s, d-m-y')); // 16-02-09, 03-04-22
console.log(date.format('N F d G:i:s Y')); // Monday April 03 4:02:09 2022
console.log(date.format('H:m:s')); // 16:04:09
console.log(date.format('Y-m-d H:i:s')); // 2022-04-03 16:02:09

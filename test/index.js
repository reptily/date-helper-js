const DateHelper = require('../date-helper.ru.js');

const date = new DateHelper('Wed Mar 3 2022 16:02:09 GMT+0300');

const formatToTest = {
    's': '09',
    'S': '9',
    'h': '16',
    'H': '16',
    'g': '04',
    'G': '4',
    'a': 'pm',
    'A': 'PM',
    'i': '02',
    'I': '2',
    'd': '03',
    'D': '3',
    'n': '4',
    'm': '03',
    'M': '3',
    'F': 'Март',
    'y': '22',
    'Y': '2022',
    'T': '-3',
};

for (let format in formatToTest) {
  console.assert(date.format(format) == formatToTest[format], "error at format '"
            + format
            + "' expected '"
            + formatToTest[format]
            + "' arrived '"
            + date.format(format)
            + "'"
      );
}


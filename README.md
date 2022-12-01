#Library helper for date formatting\
\
Easy Installation\
for browers
```html
<script type="text/javascript" charset="UTF-8" src="./date-helper.en.js"></script>
```

for Node.js
```js
const DateHelper = require('./date-helper.en.js');
```

for Vue.js
```js
import DateHelper from '~/assert/date-helper.en.js';
```

Use:
```js
const DateHelper = require('./date-helper.en.js');

let date = new DateHelper('Wed Mar 3 2022 16:02:09 GMT+0300');
console.log(date.format('d.m.y')); // print 03.03.22
```

Formats:
| **format** | **description**          |
|------------|--------------------------|
| s          | Seconds 00 - 59          |
| S          | Seconds 0 - 59           |
| h          | Hours 0 - 23             |
| H          | Hours 00 - 23            |
| g          | Hours 00 - 12            |
| G          | Hours 0 - 12             |
| a          | am - pm                  |
| A          | AM - PM                  |
| i          | Minutes 00 - 59          |
| I          | Minutes 0 - 59           |
| d          | Day 01 - 31              |
| D          | Day 1 - 31               |
| n          | Day of week 1 - 7        |
| N          | Day Monday - Sunday      |
| m          | Month 01 - 12            |
| M          | Month 1 - 12             |
| F          | Mouth January - December |
| y          | Year 99 - 20             |
| Y          | Year 1999 - 2020         |


Example for date (Wed Apr 3 2022 16:02:09 GMT+0300):\
\
April 3, 2022, 04:02 pm
```js
date.format('F D, Y, g:i a');
```

04.03.22
```js
date.format('m.d.y');
```

3, 4, 2022
```js
date.format('D, n, Y');
```

20220403
```js
date.format('Ymd');
```

16-02-09, 03-04-22
```js
date.format('h-i-s, d-m-y');
```

Monday April 03 4:02:09 2022
```js
date.format('N F d G:i:s Y');
```

16:04:09
```js
date.format('H:m:s');
```

2022-04-03 16:02:09
```js
date.format('Y-m-d H:i:s');
```




















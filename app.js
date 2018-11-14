const fs = require('fs');

let result;

let data = fs.readFileSync('./flower.txt', 'utf8')
  .trim()
  .split('\n');

function filterLetter(data, index, letter) {
    result = data.filter(word => word.charAt(index) === letter)
  return result;
}

console.log('Number of rows in flower file', data.length);
console.log('Flowers list start with S', filterLetter(data, 0, 'S'));
console.log('Number of flowers which not start with S', data.length-filterLetter(data, 0, 'S').length);
console.log(filterLetter('Flowers start with M', data, 0, 'M'));

for (i=0; i < data.length; ++i) 
     if (data[i].length == 5)
console.log('List of flowers where length is 5', data[i]);


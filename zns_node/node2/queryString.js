const querystring=require('querystring');
let json=querystring.parse('user=blue&pass=12345&age=18');
console.log(json)
var Dasherize = require('../lib/loopback-dasherize');
var dasherize = new Dasherize();
console.log(dasherize.convert('CamelCase'));
console.log(dasherize.json('CamelCase'));
console.log(dasherize.js('CamelCase'));

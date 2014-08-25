loopback-dasherize
==================

Dasherize models to load middleware files

### Why?
This is the solution to my question on the google group for loopbackjs
[https://groups.google.com/forum/#!topic/loopbackjs/-ZldaY66fU8](https://groups.google.com/forum/#!topic/loopbackjs/-ZldaY66fU8)

### Installation

    npm install loopback-dasherize


### Usage

    var Dasherize = require('../lib/loopback-dasherize');
    var dasherize = new Dasherize();

    console.log(dasherize.convert('CamelCase'));
    console.log(dasherize.json('CamelCase'));
    console.log(dasherize.js('CamelCase'));

### Output

    camel-case
    camel-case.json
    camel-case.js

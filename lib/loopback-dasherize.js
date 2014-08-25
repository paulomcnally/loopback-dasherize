var path = require('path');
var LoopbackDasherize = function() {

};

/**
 * Convert CamelCase to Dasherize
 */
LoopbackDasherize.prototype.convert = function(model) {
  var result = '';
  result = model
  .replace(/([A-Z])/g, '-$1')
  .replace(/^-/, function(str) {
    return '';
  })
  .replace(/\-(.)\-/g, '$1')
  .replace(/\-(.)$/, '$1')
  .replace(/.$/, function(str) {
    return str;
  })
  .toLowerCase();
  return result;
};

/**
 * return name with json extension
 */
LoopbackDasherize.prototype.json = function(model) {
  var fileName = this.convert(model);
  return fileName + '.json';
};

/**
 * return name with json extension
 */
LoopbackDasherize.prototype.js = function(model) {
  var fileName = this.convert(model);
  return fileName + '.js';
};

module.exports = LoopbackDasherize;

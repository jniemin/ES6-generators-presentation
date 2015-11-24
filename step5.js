"use strict";

function *generatorFunction(x){
  var y = yield "Hello World!";
  var result =  x * y;
  return result;
}

var iter = generatorFunction(2);
var fromYield = iter.next();
console.log(fromYield); // { value: 'Hello World!', done: false }
var result = iter.next(3);
console.log(result); // { value: 6, done: true }
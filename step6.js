"use strict";
function *generatorFunction(x){
  var y = yield "Hello World!";
  var result =  x * y;
  return result;
}

var iter1 = generatorFunction(2);
var iter2 = generatorFunction(3);

iter1.next();
console.log(iter1.next(2)); // { value: 4, done: true }
iter2.next();
console.log(iter2.next(3)); // { value: 9, done: true }

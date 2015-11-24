"use strict";

function *generatorFunction(x){
  var y = yield;
  var result =  x * y;
  console.log(result);
}

var iter = generatorFunction(2);
iter.next();
iter.next(3); // 6
"use strict";
function *generatorFunction(){
  console.log("Hello World!");
  var x = 1;
  var y = 3;
  yield;
  console.log(x * y);
}

var iter = generatorFunction();
iter.next(); // Hello World!
iter.next(); // 3

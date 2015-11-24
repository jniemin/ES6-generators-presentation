"use strict";
function *generatorFunction(){
  console.log("Hello World!");
  var x = 1;
  var y = 3;
  yield;
  console.log( x * y );
}

generatorFunction();
"use strict";

function somethingAsync(){
setTimeout(function(){
  return "Hello World from async function";
}, 1000);
}

var result = somethingAsync();
console.log(result); //undefined
// exits after 1000ms
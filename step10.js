"use strict";

function somethingAsync(){
  setTimeout(function(){
    iter.next("Hello World from async function!");
  }, 1000);
}

function *run(){
  var result = yield somethingAsync();
  console.log(result); // Hello World from async function!
}

var iter = run();
iter.next();

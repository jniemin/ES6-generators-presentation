"use strict";

function somethingAsync(){
  return new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("Hello World from resolved promise!"); }, 1000);
  });
}

function *run(){
  var result = yield somethingAsync();
  console.log(result); // Hello World from resolved promise!
}

var iter = run();
var promise = iter.next().value;
promise.then(
  function(data){
    iter.next( data );
  },function(err){}
);
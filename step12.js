"use strict";
var ASQ = require("asynquence-contrib");

function somethingAsync(){
  return new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("Hello World from resolved promise!"); }, 1000);
  });
}

ASQ().runner(function *main(){
  var result = yield somethingAsync();
  console.log(result); // Hello World from resolved promise!
});